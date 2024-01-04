package com.codecool.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Set;

@Entity
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "id")
    private User user;
    private LocalDate date;
    private String description;
    @OneToMany(mappedBy = "activity")
    private Set<Training> trainings;
}
