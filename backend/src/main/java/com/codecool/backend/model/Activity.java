package com.codecool.backend.model;

import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.service.TrainingService;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Optional;
import java.util.Set;

@Entity
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
    private String date;
    private String description;
    @OneToMany(mappedBy = "activity")
    private Set<Training> trainings;
    public Activity() {
    }

    public Activity(User user, String date, String description) {
        this.user = user;
        this.date = date;
        this.description = description;
    }

    public long getActivityId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public String getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }
    public Long getUserId() {
        return this.user.getId();
    }

    public  String logActivity() {
        return "Activity_id: " + id
                + "\n" +
                "User_id: " +  user.getId()
                + "\n" +
                "Date: " + date
                + "\n" +
                "Description" + description;
    }
    public void addTraining(Training training) {
        this.trainings.add(training);
    }
}