package com.codecool.backend.controller.dto;

public record TrainingDTO(Long exerciseId, int repeats,
                          long amount, long durations, Long activityId) {
}