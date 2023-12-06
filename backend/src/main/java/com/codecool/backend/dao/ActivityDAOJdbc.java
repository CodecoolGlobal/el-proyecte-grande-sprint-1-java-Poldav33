package com.codecool.backend.dao;

import com.codecool.backend.dao.connection.PSQLConnector;
import com.codecool.backend.dao.model.Activity;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ActivityDAOJdbc implements ActivityDAO{

    private final PSQLConnector connector;

    public ActivityDAOJdbc(PSQLConnector connector) {
        this.connector = connector;
    }

    @Override
    public List<Activity> getActivities() {

        String sql = "SELECT * FROM calories";

        List<Activity> activities = new ArrayList<>();

        try {
            Connection conn = connector.getConnection();
            PreparedStatement statement = conn.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();

            while(rs.next()) {
                activities.add( new Activity(
                        rs.getInt("calories_id"),
                        rs.getString("name"),
                        rs.getInt("calories_per_hour")
                ));
            }

            return activities;

        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }
}
