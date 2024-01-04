package com.codecool.backend.controller.dto;

import com.codecool.backend.model.Training;
import com.codecool.backend.model.User;

import java.time.LocalDate;
import java.util.Set;

public record ActivityDTO(UserDTO userDTO, LocalDate date, String descrition, Set<Training> trainings) {
}
