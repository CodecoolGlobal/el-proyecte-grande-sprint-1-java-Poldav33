package com.codecool.backend.model;

import jakarta.persistence.*;

@Entity
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long trainingId;
    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;
    private int repeats;
    private long amount;
    private long duration;
    @ManyToOne
    @JoinColumn(name="activity_id")
    private Activity activity;
    public Training() {
    }

    public Training(Exercise exercise, int repeats, long amount, long duration) {
        this.exercise = exercise;
        this.repeats = repeats;
        this.amount = amount;
        this.duration = duration;
    }

    public long getTrainingId() {
        return trainingId;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public int getRepeats() {
        return repeats;
    }

    public long getAmount() {
        return amount;
    }

    public long getDuration() {
        return duration;
    }

    public Long getExerciseId() {
        return this.exercise.getId();
    }
    public Long getActivityId() {
        return activity.getActivityId();
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }
}