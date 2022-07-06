/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import com.mongodb.client.model.Projections;
import static com.mongodb.client.model.Projections.slice;
import com.mongodb.client.model.Sorts;
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
        Mongo.conectar();
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
        return "{\"Conversations\":[" + result.substring(1) + "]}";
    }

    public String getConversationWithFriend(int range, String shutidF) {
        Mongo = new MongoDB();
        Mongo.conectar();
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

}
