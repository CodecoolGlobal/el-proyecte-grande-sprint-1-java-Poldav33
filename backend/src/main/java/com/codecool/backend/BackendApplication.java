package com.codecool.backend;

import com.codecool.backend.dao.ExerciseDAO;
import com.codecool.backend.dao.ExerciseDAOJdbc;
import com.codecool.backend.dao.UserDAO;
import com.codecool.backend.dao.UserDAOJdbc;
import com.codecool.backend.dao.connection.PSQLConnector;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public ExerciseDAO activityDAO(PSQLConnector connector) {
        return new ExerciseDAOJdbc(connector);
    }

    @Bean
    public UserDAO userDAO(PSQLConnector connector) {
        return new UserDAOJdbc(connector);
    }

}
