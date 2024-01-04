package com.codecool.backend.controller.dto;

public record TrainingDTO(ExerciseDTO exerciseDTO, int repeats, long amount, long durations, ActivityDTO activityDTO) {
}
