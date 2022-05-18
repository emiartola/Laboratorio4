/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp2lab4;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.json.*;

public class ParteA {

    public static void main(String[] args) throws IOException, ClassNotFoundException, Exception {

        String url = "https://restcountries.com/v2/callingcode/{callingcode}";
        String respuesta;

        for (int codigo = 1; codigo <= 300; codigo++) {

            JSONObject pais;
            try {
                respuesta = peticionHttpGet(url + codigo);
                System.out.println(respuesta);
                
                pais = new JSONObject(respuesta.substring(1, respuesta.length() - 1));

                if (pais != null) {
                    String nombre = pais.getString("name");
                    String capital = pais.getString("capital");
                    String region = pais.getString("region");
                    Long poblacion = pais.getLong("population");
                    double latitud = pais.getJSONArray("latlng").getDouble(0);
                    double longitud = pais.getJSONArray("latlng").getDouble(1);
                    int codigoPais = Integer.parseInt(pais.getJSONArray("callingCodes").getString(0));

                    //busco país en base de datos filtrando por código
                    String query = "SELECT * FROM Pais WHERE codigoPais = " + codigoPais;

                    Class.forName("com.mysql.cj.jdbc.Driver");
                    try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost/paises_db", "root", "sasa")) {
                        Statement stmt = con.createStatement();
                        ResultSet rs = stmt.executeQuery(query);
                        
                        if (rs.next()) {
                            
                            query = "UPDATE pais SET"
                                    + " nombrePais = '" + nombre + "', "
                                    + " capitalPais = '" + capital + "', "
                                    + " region = '" + region + "', "
                                    + " poblacion = " + poblacion + ","
                                    + " latitud = " + latitud + ","
                                    + " longitud = " + longitud
                                    + " WHERE codigoPais = " + codigoPais;
                            stmt.executeUpdate(query);
                            System.out.println("Pais actualizado");
                            
                        } else {
                            //ejecuto un insert a la tabla país
                            query = "INSERT INTO pais (codigoPais, nombrePais,capitalPais,region,poblacion,latitud,longitud) VALUES (?,?,?,?,?,?,?)";
                            PreparedStatement preparedStmt = con.prepareStatement(query);
                            preparedStmt.setInt(1, codigoPais);
                            preparedStmt.setString(2, nombre);
                            preparedStmt.setString(3, capital);
                            preparedStmt.setString(4, region);
                            preparedStmt.setLong(5, poblacion);
                            preparedStmt.setDouble(6, latitud);
                            preparedStmt.setDouble(7, longitud);
                            preparedStmt.execute();
                            System.out.println("Nuevo pais agregado a la coleccion paises");
                        }
                    }
                } 
                /*else {
                    continue;
                }*/
            } catch (java.io.FileNotFoundException | SQLException e) {
                //System.out.println(e.getMessage());
            }
            
        }
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
