package com.codecool.backend.service;

import com.codecool.backend.controller.dto.FilterDTO;
Delete import com.codecool.backend.model.Exercise;
import com.codecool.backend.repository.ExerciseRepository;
import com.codecool.backend.repository.ExerciseRepositoryAll;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {
    private final ExerciseRepositoryAll exerciseRepositoryAll;


    public ExerciseService(ExerciseRepositoryAll exerciseRepositoryAll) {
        this.exerciseRepositoryAll = exerciseRepositoryAll;
    }

    public List<Exercise> getFilterByDifficulty(FilterDTO filterDTO) {
        return exerciseRepositoryAll.filterExercise(filterDTO);
    }
}
