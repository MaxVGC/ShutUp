/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author carlo
 */
public class Cifrador {

    /**
     * Se encarga de cifrar un String usando el metodo de hash (SHA-256).
     *
     * @param data Datos a cifrar.
     * @return El parametro data cifrado en SHA-256.
     * @throws java.lang.Exception Si un error ocurre.
     */

    public String hash(String data) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.reset();
            byte[] b = md.digest(data.getBytes());
            int size = b.length;
            StringBuffer h = new StringBuffer(size);
            for (int i = 0; i < size; i++) {
                int u = b[i] & 255;
                if (u < 16) {
                    h.append("0" + Integer.toHexString(u));
                } else {
                    h.append(Integer.toHexString(u));
                }
            }
            return h.toString();
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(Cifrador.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
}
