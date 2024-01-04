package com.codecool.backend.model;


import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "exercises")
public class Exercise implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
