/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

import com.mongodb.DBObject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.client.model.Projections;
import static com.mongodb.client.model.Projections.slice;
import com.mongodb.client.model.Sorts;
import com.mongodb.client.model.Updates;
import com.mongodb.util.JSON;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.bson.Document;
import org.bson.conversions.Bson;

/**
 *
 * @author carlo
 */
public class Conversations {

    MongoDB Mongo = null;
    Users user = null;

    public Conversations(Users user) {
        this.user = user;
    }

    public String getAllConversations(int range) {
        Mongo = new MongoDB();
        MongoCollection<Document> aux = Mongo.database.getCollection("Conversations");
        Bson projectionFields = Projections.fields(
                Projections.excludeId(), slice("Messages", range));
        MongoCursor<Document> cursor = aux.find(eq("Participants", user.getShutId()))
                .projection(projectionFields)
                .sort(Sorts.descending("Messages.Time")).iterator();
        String result = "";
        while (cursor.hasNext()) {
            result = result + "," + cursor.next().toJson();
        }
        Mongo.getConexion().close();
        if (result == "") {
            return "{\"Conversations\":null}";
        } else {
            return "{\"Conversations\":[" + result.substring(1) + "]}";
        }
    }

    public String getConversationWithFriend(int range, String shutidF) {
        Mongo = new MongoDB();
        MongoCollection<Document> aux = Mongo.database.getCollection("Conversations");
        Bson projectionFields = Projections.fields(
                Projections.excludeId(), slice("Messages", range));
        MongoCursor<Document> cursor = aux.find(and(eq("Participants", user.getShutId()), eq("Participants", shutidF)))
                .projection(projectionFields)
                .sort(Sorts.descending("Messages.Time")).iterator();
        String result = "";
        while (cursor.hasNext()) {
            result = result + "," + cursor.next().toJson();
        }
        Mongo.getConexion().close();
        return "{\"Conversations\":[" + result.substring(1) + "]}";
    }

    public void SendMessage(String ShutId, String Msg) {
        Mongo = new MongoDB();
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        MongoCollection<Document> aux = Mongo.database.getCollection("Conversations");
        Document msg = new Document().append("Message", Msg)
                .append("Time", (timestamp.getTime()))
                .append("From", user.getShutId());
        aux.updateOne(and(eq("Participants", user.getShutId()), eq("Participants", ShutId)), Updates.addToSet("Messages", msg));
        Mongo.getConexion().close();
    }

    public void setNewConversation(String ShutId, String Msg) {
        Mongo = new MongoDB();
        Map m1 = new HashMap();
        m1.put("Message", Msg);
        m1.put("Time", new Timestamp(System.currentTimeMillis()).getTime());
        m1.put("From", user.getShutId());
        List Messages = new ArrayList();
        Messages.add(m1);
        List Participants = new ArrayList();
        Participants.add(user.getShutId());
        Participants.add(ShutId);
        Document a = new Document().append("Messages", Messages).append("Participants", Participants);
        MongoCollection aux = Mongo.database.getCollection("Conversations");
        aux.insertOne(a);
        Mongo.getConexion().close();
    }

}
