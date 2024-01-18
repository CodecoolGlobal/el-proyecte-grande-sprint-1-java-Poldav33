package com.codecool.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

import java.util.Objects;

@Getter
@Entity
@Table(name="exercises")
public class Exercise {
    @Id
    private long id;
    private String name;
    private String type;
    private String muscle;
    private String difficulty;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exercise exercise = (Exercise) o;
        return id == exercise.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Exercise() {
    }

    public Exercise(String name, String type, String muscle, String difficulty) {
        this.name = name;
        this.type = type;
        this.muscle = muscle;
        this.difficulty = difficulty;
    }

}
