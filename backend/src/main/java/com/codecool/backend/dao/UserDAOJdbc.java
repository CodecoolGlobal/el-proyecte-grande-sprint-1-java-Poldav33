package com.codecool.backend.dao;

import com.codecool.backend.controller.dto.NewUserDTO;
import com.codecool.backend.controller.dto.UserDTO;
import com.codecool.backend.dao.connection.PSQLConnector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAOJdbc implements UserDAO {

    private final PSQLConnector connector;

    public UserDAOJdbc(PSQLConnector connector) {
        this.connector = connector;
    }

    @Override
    public boolean addUser(NewUserDTO newUserDTO) {

        String sql = "INSERT INTO users (name, username, password, email) VALUES (?, ?, ?, ?)";

        try (Connection connection = connector.getConnection()) {
            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setString(1, newUserDTO.name());
            ps.setString(2, newUserDTO.username());
            ps.setString(3, newUserDTO.password());
            ps.setString(4, newUserDTO.email());

            ps.executeUpdate();
            return true;
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    @Override
    public boolean checkUser(UserDTO userDTO) {
        String sql = "SELECT * FROM users WHERE username = ? AND password = ?";

        try (Connection connection = connector.getConnection()) {
            PreparedStatement psmt = connection.prepareStatement(sql);
            psmt.setString(1, userDTO.userName());
            psmt.setString(2, userDTO.password());
            ResultSet rs = psmt.executeQuery();
            if (!rs.wasNull()) {
                return !rs.wasNull();
            } else {
                System.out.println("This user is didnt exist");
                return rs.wasNull();
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }


}

