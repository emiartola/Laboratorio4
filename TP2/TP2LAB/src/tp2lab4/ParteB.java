/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp2lab4;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.bson.Document;
import org.json.JSONObject;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;

/**
 *
 * @author Emi
 */
public class ParteB {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {

        String url = "https://restcountries.com/v2/callingcode/";
        MongoClient mongoClient = crearConexion();
        MongoDatabase db = mongoClient.getDatabase("paises_db");
        MongoCollection<Document> paises = db.getCollection("paises");

        String respuesta;
        JSONObject paisJson;

        for (int codigo = 1; codigo <= 300; codigo++) {

            try {
                respuesta = peticionHttpGet(url + codigo);
                System.out.println(respuesta);
                
                paisJson = new JSONObject(respuesta.substring(1, respuesta.length() - 1));

                if (paisJson != null) {
                    String nombre = paisJson.getString("name");
                    String capital = paisJson.getString("capital");
                    String region = paisJson.getString("region");
                    Long poblacion = paisJson.getLong("population");
                    double latitud = paisJson.getJSONArray("latlng").getDouble(0);
                    double longitud = paisJson.getJSONArray("latlng").getDouble(1);
                    int codigoPais = Integer.parseInt(paisJson.getJSONArray("callingCodes").getString(0));
                    double area = paisJson.getDouble("area");

                    Document pais = new Document("codigoPais", codigoPais)
                            .append("nombre", nombre)
                            .append("capital", capital)
                            .append("region", region)
                            .append("poblacion", poblacion)
                            .append("latitud", latitud)
                            .append("longitud", longitud)
                            .append("superficie", area);

                    BasicDBObject query = new BasicDBObject();
                    query.put("codigoPais", codigoPais);

                    //paises.insertOne(pais);
                    FindIterable<Document> busqueda = paises.find(query);
                    Document paisDB = busqueda.first();
                    if (paisDB != null) {
                        //pais.append("_id",paisDB.getObjectId("_id") );

                        //ejecuto un update
                        BasicDBObject updateObject = new BasicDBObject();
                        updateObject.put("$set", pais);
                        paises.updateOne(query, updateObject);

                        System.out.println("Se actualizó pais en la coleccion paises");
                    } else {
                        //ejecuto un insert
                        paises.insertOne(pais);
                        System.out.println("Nuevo pais agregado a la coleccion paises");
                    }
                }
            } catch (Exception e) {
                //System.out.println(e.getMessage());
                //System.out.println(e.toString());
            }
        }
        
        todosLosPaises(paises);
        paisesAmerica(paises);
        paisesAmericasConPoblacionMayorA100M(paises);
        paisesNoAfrica(paises);
        actualizarEgipto(paises);
        borrarPais(paises,258);
        paisesConPoblacionEntre(paises, 50000000, 150000000);
        ordenarPaisesAsc(paises);
        crearIndice(paises);
        
    }

    public static void todosLosPaises(MongoCollection<Document> paises) {
        System.out.println("Todos los documentos de la coleccion");
        FindIterable<Document> docs = paises.find();
        for (Document doc : docs) {
            System.out.println(doc);
        }
        System.out.println("-------------------------------------------------");
    }

    public static void paisesAmerica(MongoCollection<Document> paises) {
        System.out.println("Documentos con la región Americas");
        BasicDBObject query = new BasicDBObject("region", "Americas");
        FindIterable<Document> docs = paises.find(query);
        for (Document doc : docs) {
            System.out.println(doc);
        }
        System.out.println("-------------------------------------------------");
    }

    public static void paisesAmericasConPoblacionMayorA100M(MongoCollection<Document> paises) {
        System.out.println("Documentos con la región Americas y población mayor a 100000000");
        BasicDBObject query = new BasicDBObject("region", "Americas").append("poblacion", new BasicDBObject("$gt", 100000000));
        FindIterable<Document> docs = paises.find(query);
        for (Document doc : docs) {
            System.out.println(doc);
        }
        System.out.println("-------------------------------------------------");
    }
    
    public static void paisesNoAfrica(MongoCollection<Document> paises) {
        System.out.println("Documentos con la región diferente a Africa");
        BasicDBObject query = new BasicDBObject("region", new BasicDBObject("$ne", "Africa"));
        FindIterable<Document> docs = paises.find(query);
        for (Document doc : docs) {
            System.out.println(doc);
        }
        System.out.println("-------------------------------------------------");
    }
    
    public static void actualizarEgipto(MongoCollection<Document> paises) {
        System.out.println("Actualizar Egipto");
        
        BasicDBObject updatedDocument = new BasicDBObject("nombre", "Egypt");
        FindIterable<Document> docs = paises.find(updatedDocument);
        paises.updateOne(updatedDocument, new BasicDBObject("$set", new BasicDBObject("nombre", "Egipto")));
        paises.updateOne(updatedDocument, new BasicDBObject("$set", new BasicDBObject("superficie", 95000000)));
      
        System.out.println("-------------------------------------------------");
    }
    
    public static void borrarPais(MongoCollection<Document> paises, int num){
        paises.deleteOne(new BasicDBObject("codigoPais", num));
        System.out.println("Se eliminó el país: "+ num);
        System.out.println("-------------------------------------------------");
    }

    public static void paisesConPoblacionEntre(MongoCollection<Document> paises,int limiteMenor, int LimiteMayor ) {
        System.out.println("Paises con población entre" + limiteMenor + " y " + LimiteMayor);
        BasicDBObject query = new BasicDBObject("poblacion", new BasicDBObject("$gt", limiteMenor)).append("poblacion", new BasicDBObject("$lt", LimiteMayor));
        FindIterable<Document> docs = paises.find(query);
        for (Document doc : docs) {
            System.out.println(doc);
        }
        System.out.println("-------------------------------------------------");
    }
    
    public static void ordenarPaisesAsc(MongoCollection<Document> paises){
    System.out.println("Paises ordenados por nombre de forma ascendente");
    FindIterable<Document> docs = paises.find().sort(new BasicDBObject("nombre", -1));
    for (Document doc : docs) {
            System.out.println(doc);
        }
    }
    
    public static void crearIndice(MongoCollection<Document> paises){
    paises.createIndex(new BasicDBObject("codigoPais",1));
    System.out.println("Se agregó codigoPais como índice");
    }
    
    private static MongoClient crearConexion() {
        MongoClient mongo = null;
        try {
            mongo = new MongoClient("localhost", 27017);
        } catch (Exception e) {
            //e.printStackTrace();
        }
        return mongo;
    }

    public static String peticionHttpGet(String urlParaVisitar) throws Exception {
        // Esto es lo que vamos a devolver
        StringBuilder resultado = new StringBuilder();
        // Crear un objeto de tipo URL
        URL url = new URL(urlParaVisitar);

        // Abrir la conexión e indicar que será de tipo GET
        HttpURLConnection conexion = (HttpURLConnection) url.openConnection();
        conexion.setRequestMethod("GET");
        try ( // Búferes para leer
                BufferedReader rd = new BufferedReader(new InputStreamReader(conexion.getInputStream()))) {
            String linea;
            // Mientras el BufferedReader se pueda leer, agregar contenido a resultado
            while ((linea = rd.readLine()) != null) {
                resultado.append(linea);
            }
            // Cerrar el BufferedReader
        }
        // Regresar resultado, pero como cadena, no como StringBuilder
        return resultado.toString();
    }
}
