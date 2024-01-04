package com.codecool.backend.service;

import com.codecool.backend.controller.dto.FilterDTO;
import com.codecool.backend.controller.dto.ExerciseDTO;
import com.codecool.backend.model.Exercise;
import com.codecool.backend.repository.ExerciseRepository;
import com.codecool.backend.specification.ExerciseSpecification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {
    private final ExerciseRepository exerciseRepository;

    public ExerciseService(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    public List<Exercise> getActivities() {
        return exerciseRepository.findAll();
    }

    public List<Exercise> getFilteredExercises(List<FilterDTO> filterDTOS) {
        return exerciseRepository.findAll(ExerciseSpecification.columnEqual(filterDTOS));
    }
}
