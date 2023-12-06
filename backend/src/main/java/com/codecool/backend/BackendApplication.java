package com.codecool.backend;

import com.codecool.backend.dao.ActivityDAO;
import com.codecool.backend.dao.ActivityDAOJdbc;
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
    public ActivityDAO activityDAO(PSQLConnector connector) {
        return new ActivityDAOJdbc(connector);
    }

}
