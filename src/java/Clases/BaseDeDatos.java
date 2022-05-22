/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author carlo
 */
public class BaseDeDatos {
    Connection conexion = null;
    String user = "awpbzdko";
    String pass = "5kVCZpOG5pMo19zAmKiFMP86TeM-EAGo";
    String driverDB = "org.postgresql.Driver";
    String url = "jdbc:postgresql://otto.db.elephantsql.com:5432/awpbzdko";

    
    /**
     * Usa los parametros user, pass, url y driverDB para establecer la conexion
     * a la pase de datos.
     * @return La conexion como tal para usar la base de datos.
     */
    public Connection conectar() {
        try {
            Class.forName(driverDB);
            conexion = DriverManager.getConnection(url, user, pass);
            return conexion;
        } catch (ClassNotFoundException | SQLException ex) {
            System.out.println(ex);
            return null;
        }
    }

    /**
     * Obtiene la conexion de la base de datos.
     *
     * @return Retorna la conexion si esta existe en otro caso retorna null.
     */
    public Connection getConexion() {
        return conexion;
    }
    
    public ResultSet executeQuery(String query){
        try {
            conectar();
            Statement q = getConexion().createStatement();
            ResultSet f = q.executeQuery(query);
            getConexion().close();
            return f;
        } catch (SQLException ex) {
            Logger.getLogger(BaseDeDatos.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    public void execute(String query){
        try {
            conectar();
            PreparedStatement pst = getConexion().prepareStatement(query);
            pst.execute();
            pst.close();
            getConexion().close();
        } catch (SQLException ex) {
            Logger.getLogger(BaseDeDatos.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
