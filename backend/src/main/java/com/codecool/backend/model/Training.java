package com.codecool.backend.model;

import jakarta.persistence.*;

@Entity
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "id")
    private Exercise exercise;
    private int repeats;
    private long amount;
    private long duration;
    @ManyToOne
    private Activity activity;
}
