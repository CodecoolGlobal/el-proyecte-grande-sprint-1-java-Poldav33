package com.codecool.backend.service;
import com.codecool.backend.controller.dto.ExerciseDTO;
import com.codecool.backend.repository.ExerciseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {


    private final ExerciseRepository exerciseRepository;

    public ExerciseService( ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    public List<ExerciseDTO> getActivities() {
        return null; //exerciseDAO.getExercises();
    }
}
