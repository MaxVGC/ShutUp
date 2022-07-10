/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package WebSocket;

import Clases.Conversations;
import Clases.Users;
import jakarta.websocket.server.ServerEndpoint;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.atomic.AtomicInteger;
import Util.HTMLFilter;
import java.sql.Timestamp;
import org.json.JSONObject;

/**
 *
 * @author carlo
 */
@ServerEndpoint("/webSocket/{shutid}")

public class Chats {

    private Conversations Conversation = null;
    private static final Map<String, Users> users = new ConcurrentHashMap();
    private static final String GUEST_PREFIX = "Guest";
    private static final AtomicInteger connectionIds = new AtomicInteger(0);
    private static final Set<Chats> connections
            = new CopyOnWriteArraySet<>();

    private final String nickname;
    private Session session;
    private String GuestShutId;
    JSONObject jsonReader = null;

    public Chats() {
        nickname = GUEST_PREFIX + connectionIds.getAndIncrement();
    }

    @OnOpen
    public void start(Session session, @PathParam("shutid") String shutid) {
        this.session = session;
        this.GuestShutId = shutid;
        connections.add(this);
        users.put(shutid, new Users(shutid));
        users.get(shutid).connect();
        String message = String.format("* %s %s", shutid, "has joined.");
    }

    @OnClose
    public void end(@PathParam("shutid") String shutid) {
        connections.remove(this);
        users.get(shutid).disconnect();
        String message = String.format("* %s %s",
                nickname, "has disconnected.");
    }

    @OnMessage
    public void incoming(String message, @PathParam("shutid") String shutid) {
        try {
            jsonReader = new JSONObject(message);
            Conversation = new Conversations(users.get(shutid));
            String filteredMessage = HTMLFilter.filter(jsonReader.getString("Message"));
            broadcast(jsonReader.getString("ShutIdR"), "{\"Type\":\"Message\",\"Payload\":{\"Message\":\"" + filteredMessage + "\",\"From\":\"" + shutid + "\",\"For\":\"" + jsonReader.getString("ShutIdR") + "\",\"Time\":{\"$numberLong\":" + new Timestamp(System.currentTimeMillis()).getTime() + "}}}");
           // Conversation.SendMessage(jsonReader.getString("ShutIdR"), filteredMessage);
        } catch (Exception e) {
            System.out.println(e);
        }

    }

    @OnError
    public void onError(Throwable t) throws Throwable {
        System.out.println(t.getCause());
        System.out.println("Chat Error: " + t.toString());
    }

    private void broadcast(String target, String msg) {
        for (Chats client : connections) {
            try {
                if (this.session != client.session && target.equals(client.GuestShutId)) {
                    synchronized (client) {
                        client.session.getBasicRemote().sendText(msg);
                    }
                }
            } catch (IOException e) {
                connections.remove(client);
                try {
                    client.session.close();
                } catch (IOException e1) {
                    // Ignore
                }
            }
        }
    }
}
