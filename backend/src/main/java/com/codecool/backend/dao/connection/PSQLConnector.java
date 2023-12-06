package com.codecool.backend.dao.connection;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;

@Component
public class PSQLConnector {

    @Value("${connectionstring}")
    private String url;
    @Value("${dbpassword}")
    private String dbPassword;
    @Value("${dbusername}")
    private String dbUsername;

    public PSQLConnector() {
        System.out.println("hi");
    }

    public Connection getConnection() {
        Connection connection = null;
        System.out.println("url:"+url);
        try {
            System.out.println("haho");

            return DriverManager.getConnection(url, dbUsername, dbPassword);

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return connection;
    }

}
