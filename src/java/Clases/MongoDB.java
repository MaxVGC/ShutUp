/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

import com.mongodb.ConnectionString;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.bson.conversions.Bson;

/**
 *
 * @author carlo
 */
public class MongoDB {

    String uri = "mongodb+srv://MaxVGC:pkmn3612@shutup.wwg62fe.mongodb.net/?retryWrites=true&w=majority";
    MongoClient mongoClient = null;
    ConnectionString connectionString = null;
    MongoDatabase database=null;
    
    public MongoDB(){
        this.conectar();
    }

    public MongoClient conectar() {
        connectionString = new ConnectionString("mongodb+srv://MaxVGC:pkmn3612@shutup.wwg62fe.mongodb.net/?retryWrites=true&w=majority");
        mongoClient = MongoClients.create(connectionString);
        database = mongoClient.getDatabase("ShutUp");
        return mongoClient;
    }
    
    public MongoClient getConexion() {
        return mongoClient;
    }
    
    public Document find(String collection, Bson doc){
        conectar();
        MongoCollection<Document> aux = database.getCollection(collection);
        Document resultado= aux.find(doc).first();
        getConexion().close();
        return resultado;
    }
    
    public void insert(String collection, Document doc) {
        conectar();
        MongoCollection aux = database.getCollection(collection);
        aux.insertOne(doc);
        getConexion().close();
    }
}
