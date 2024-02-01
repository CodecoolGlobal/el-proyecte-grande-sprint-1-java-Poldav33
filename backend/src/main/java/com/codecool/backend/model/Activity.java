package com.codecool.backend.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name="activitys")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserEntity user;
    private String date;
    private String description;
    @OneToMany(mappedBy = "activity")
    private Set<Training> trainings;
    public Activity() {
    }

    public Activity(UserEntity user, String date, String description) {
        this.user = user;
        this.date = date;
        this.description = description;
    }

    public long getActivityId() {
        return id;
    }

    public UserEntity getUser() {
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