package com.codecool.backend.controller.dto;

public record TrainingDTO(String exerciseName, int repeats,
                          long amount, long durations) {
}