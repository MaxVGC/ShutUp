/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Servlets;

import Clases.PostgresDB;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author carlo
 */
public class SearchUsers extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try ( PrintWriter out = response.getWriter()) {

            PostgresDB pDB = new PostgresDB();
            String data = request.getParameter("data");
            String shutid = request.getParameter("shutid");
            String sql = "with cte as (sql) select json_agg(c) from cte as c";
            String where = "and (u.\"ShutId\" ilike '%" + data + "%' or u.\"Name\" ilike '%" + data + "%' or u.\"Lastname\" ilike '%" + data + "%' or u.\"Email\" ilike '%" + data + "%' or u.\"PhoneNumber\" ilike '%" + data + "%') order by u.\"Name\" asc limit 5";
            String friends = "SELECT u.\"Name\", u.\"Lastname\",u.\"ShutId\",u.\"Username\",f.\"AcceptedRequest\" FROM public.\"Users\" as u, public.\"Friends\" as f where u.\"ShutId\"!='" + shutid + "' and (f.\"ShutId_1\"=u.\"ShutId\" or f.\"ShutId_2\"=u.\"ShutId\") and (f.\"ShutId_1\"='" + shutid + "' or f.\"ShutId_2\"='" + shutid + "') " + where;
            String notFriends = "SELECT u.\"Name\", u.\"Lastname\",u.\"ShutId\",u.\"Username\" FROM public.\"Users\" as u where u.\"ShutId\"!='" + shutid + "' and u.\"ShutId\"!= all(SELECT u.\"ShutId\" FROM public.\"Users\" as u, public.\"Friends\" as f where u.\"ShutId\"!='" + shutid + "' and (f.\"ShutId_1\"=u.\"ShutId\" or f.\"ShutId_2\"=u.\"ShutId\")  and (f.\"ShutId_1\"='" + shutid + "' or f.\"ShutId_2\"='" + shutid + "')) "+where;
            friends = sql.replace("sql", friends);
            notFriends = sql.replace("sql", notFriends);
            ResultSet res1 = pDB.executeQuery(friends);
            ResultSet res2 = pDB.executeQuery(notFriends);
            try {
                res1.next();
                res2.next();
                out.print("{\"friends\":" + res1.getString(1) + ",\"notFriends\":"+res2.getString(1)+"}");
                out.flush();
            } catch (SQLException ex) {
                Logger.getLogger(SearchUsers.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
