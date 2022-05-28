/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Clases;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author carlo
 */
public class Users extends BaseDeDatos {

    private String ShutId;
    private String Username;
    private String Password;
    private String Name;
    private String Lastname;
    private String Email;
    private Long PhoneNumber;

    public Users() {

    }

    public String getShutId() {
        return ShutId;
    }

    public void setShutId(String ShutId) {
        this.ShutId = ShutId;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String Username) {
        this.Username = Username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String Password) {
        this.Password = new Cifrador().hash(Password);
    }

    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        String[] aux2 = Name.split(" ");
        String rst = "";
        for (int i = 0; i < aux2.length; i++) {
            if (aux2[i].length() != 0) {
                rst = rst + aux2[i].substring(0, 1).toUpperCase() + aux2[i].substring(1) + ";";
            }
        }
        aux2 = rst.split(";");
        this.Name = String.join(" ", aux2);
    }

    public String getLastname() {
        return Lastname;
    }

    public void setLastname(String Lastname) {
        String[] aux2 = Lastname.split(" ");
        String rst = "";
        for (int i = 0; i < aux2.length; i++) {
            if (aux2[i].length() != 0) {
                rst = rst + aux2[i].substring(0, 1).toUpperCase() + aux2[i].substring(1) + ";";
            }
        }
        aux2 = rst.split(";");
        this.Lastname = String.join(" ", aux2);
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Address) {
        this.Email = Address;
    }

    public Long getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPhoneNumber(Long PhoneNumber) {
        this.PhoneNumber = PhoneNumber;
    }

    /**
     * Genera un ShutId unico para cada usuario
     */
    private String generateShutId() {
        int i = 7;
        String numbers = "0123456789";
        String letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String result = "";
        for (int j = 0; j < 7; j++) {
            if (j < 3) {
                result = result + letters.charAt((int) (Math.random() * letters.length()));
            } else {
                result = result + numbers.charAt((int) (Math.random() * numbers.length()));
            }
        }
        return result;
    }

    /**
     * Verifica si existe el usuario en la base de datos
     */
    public boolean existUser() {
        try {
            System.out.println(this.toString());
            ResultSet f = executeQuery("SELECT \"ShutId\" from public.\"Users\" where \"Username\"='" + this.getUsername() + "'or \"ShutId\"='" + this.getShutId() + "' or \"Email\"='" + this.getEmail() + "' or \"PhoneNumber\"='" + this.getPhoneNumber() + "'");
            if (f.next()) {
                return true;
            } else {
                return false;
            }
        } catch (SQLException ex) {
            Logger.getLogger(Users.class.getName()).log(Level.SEVERE, null, ex);
            return false;
        }
    }

    /**
     * Inserta el usuario en la base de datos
     * Establece un estado por defecto para el usuario
     */
    public void insertUser() {
        this.ShutId = generateShutId();
        execute("INSERT INTO public.\"Users\"(\n"
                + "	\"ShutId\", \"Username\", \"Password\", \"Name\", \"Lastname\", \"Email\", \"PhoneNumber\")\n"
                + "	VALUES ('" + this.getShutId() + "', '" + this.getUsername() + "', '" + this.getPassword() + "', '" + this.getName() + "', '" + this.getLastname() + "', '" + this.getEmail() + "', " + this.getPhoneNumber() + ")");
        execute("INSERT INTO public.\"State\"(\n"
                + "	\"ShutId\", \"CurrentState\", \"LastUpdate\")\n"
                + "	VALUES ('"+this.getShutId()+"', 'Created', now())");
    }

    /**
     * Verifica si la contraseña es valida y valida si esta online
     * @return 
     */
    public int isValidPassword() {
        try {
            ResultSet f = executeQuery("SELECT S.\"CurrentState\" , U.\"ShutId\" from public.\"Users\" U,public.\"State\" S where U.\"ShutId\"=S.\"ShutId\" and (U.\"Username\"='" + this.getUsername() + "'or U.\"ShutId\"='" + this.getShutId() + "' or U.\"Email\"='" + this.getEmail() + "' or U.\"PhoneNumber\"='" + this.getPhoneNumber() + "') and U.\"Password\"='" + this.getPassword() + "'");
            if (f.next()) {
                if(f.getString(1).equals("Disconnected") || f.getString(1).equals("Created") ){
                    this.setShutId(f.getString(2));
                    return 1;
                }else{
                    return 2;
                }
            } else {
                return 0;
            }
        } catch (SQLException ex) {
            Logger.getLogger(Users.class.getName()).log(Level.SEVERE, null, ex);
            return 0;
        }
    }
    
    public void connect(){
        execute("UPDATE public.\"State\" SET \"CurrentState\"='Online' WHERE \"ShutId\"='"+this.ShutId+"'");
    }

    @Override
    public String toString() {
        return "Users{ Username=" + Username + ", Password=" + Password + ", Name=" + Name + ", Lastname=" + Lastname + ", Email=" + Email + ", PhoneNumber=" + PhoneNumber + '}';
    }

}
