package com.codecool.backend.dao;

import com.codecool.backend.dao.connection.PSQLConnector;
import com.codecool.backend.dao.model.Exercise;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ExerciseDAOJdbc implements ExerciseDAO {

    private final PSQLConnector connector;

    public ExerciseDAOJdbc(PSQLConnector connector) {
        this.connector = connector;
    }

    @Override
    public List<Exercise> getFilteredExercises(String Activity) {
        return null;
    }

    @Override
    public List<Exercise> getExercises() {

        String sql = "SELECT * FROM exercises";

        List<Exercise> activities = new ArrayList<>();

        try {
            Connection conn = connector.getConnection();
            PreparedStatement statement = conn.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();

            while(rs.next()) {
                activities.add( new Exercise(
                        rs.getInt("id"),
                        rs.getString("name"),
                        rs.getString("type"),
                        rs.getString("muscle"),
                        rs.getString("difficulty")
                ));
            }

            conn.close();

            return activities;

        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return null;
        }

    }
}
