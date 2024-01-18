package com.codecool.backend.controller.dto;

import com.codecool.backend.model.Training;

import java.time.LocalDate;
import java.util.Set;

public record ActivityDTO(Long activityId, Long userId, LocalDate date, String description, Set<Training> trainings) {
}
