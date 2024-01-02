package com.codecool.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Exercise {
    @Id
    private long id;
    private String name;
    private String type;
    private String muscle;
    private String difficulty;

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getMuscle() {
        return muscle;
    }

    public String getDifficulty() {
        return difficulty;
    }

}