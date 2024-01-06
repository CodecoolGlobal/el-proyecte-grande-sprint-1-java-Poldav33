package com.codecool.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Nutrition {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private int calories;
    private int fat_total_g;
    private int carbohydrates_total_g;
    private int fiber_g;

    public Nutrition() {
    }

    public Nutrition( String name, int calories, int fat_total_g, int carbohydrates_total_g, int fiber_g) {
        this.name = name;
        this.calories = calories;
        this.fat_total_g = fat_total_g;
        this.carbohydrates_total_g = carbohydrates_total_g;
        this.fiber_g = fiber_g;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getCalories() {
        return calories;
    }

    public int getFat_total_g() {
        return fat_total_g;
    }

    public int getCarbohydrates_total_g() {
        return carbohydrates_total_g;
    }

    public int getFiber_g() {
        return fiber_g;
    }
}
