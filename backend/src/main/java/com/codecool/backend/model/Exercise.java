package com.codecool.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="exercises")
public class Exercise {
    @Id
    private long id;
    private String name;
    private String type;
    private String muscle;
    private String difficulty;

    public Exercise() {
    }

    public Exercise(String name, String type, String muscle, String difficulty) {
        this.name = name;
        this.type = type;
        this.muscle = muscle;
        this.difficulty = difficulty;
    }

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
