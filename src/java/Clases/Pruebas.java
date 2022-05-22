/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package Clases;

/**
 *
 * @author carlo
 */
public class Pruebas {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String aux="carlos    andres      ";
        String[] aux2=aux.split(" ");
        String rst="";
        for (int i = 0; i < aux2.length; i++) {
            if(aux2[i].length()!=0){
                rst=rst+aux2[i].substring(0,1).toUpperCase()+aux2[i].substring(1)+";";
            }
        }
        aux2=rst.split(";");
        rst=String.join(" ", aux2);
        System.out.println(rst);
    }
    
}
