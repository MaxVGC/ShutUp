/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package WebSocket;

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

/**
 *
 * @author carlo
 */
@ServerEndpoint("/webSocket/{shutid}")

public class Chats {

    private static final Map<String, Users> users = new ConcurrentHashMap();
    private static final String GUEST_PREFIX = "Guest";
    private static final AtomicInteger connectionIds = new AtomicInteger(0);
    private static final Set<Chats> connections
            = new CopyOnWriteArraySet<>();

    private final String nickname;
    private Session session;

    public Chats() {
        nickname = GUEST_PREFIX + connectionIds.getAndIncrement();
    }

    @OnOpen
    public void start(Session session, @PathParam("shutid") String shutid) {
        this.session = session;
        connections.add(this);
        users.put(shutid, new Users(shutid));
        users.get(shutid).connect();
        String message = String.format("* %s %s", shutid, "has joined.");
        broadcast(message);
    }

    @OnClose
    public void end( @PathParam("shutid") String shutid) {
        connections.remove(this);
        users.get(shutid).disconnect();
        String message = String.format("* %s %s",
                nickname, "has disconnected.");
        broadcast(message);
    }

    @OnMessage
    public void incoming(String message) {
        try {
            System.out.println(message);
            String filteredMessage = HTMLFilter.filter(message);
            broadcast(filteredMessage);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @OnError
    public void onError(Throwable t) throws Throwable {
        System.out.println(t.getCause());
        System.out.println("Chat Error: " + t.toString());
    }

    private static void broadcast(String msg) {
        for (Chats client : connections) {
            try {
                synchronized (client) {
                    client.session.getBasicRemote().sendText(msg);
                }
            } catch (IOException e) {
                connections.remove(client);
                try {
                    client.session.close();
                } catch (IOException e1) {
                    // Ignore
                }
                String message = String.format("* %s %s",
                        client.nickname, "has been disconnected.");
                broadcast(message);
            }
        }
    }

}
