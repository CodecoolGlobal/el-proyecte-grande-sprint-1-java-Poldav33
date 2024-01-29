package com.codecool.backend.controller.mapper;

import com.codecool.backend.controller.dto.ExerciseDTO;
import com.codecool.backend.model.Exercise;

public class ExerciseMapper {
    public static Exercise getExerciseFromExerciseDTO(ExerciseDTO exerciseDTO) {
        return null;
    }
    public static ExerciseDTO getExerciseDTOFromExercise(Exercise exercise) {
        return new ExerciseDTO(
                exercise.getId(),
                exercise.getName(),
                exercise.getType(),
                exercise.getMuscle(),
                exercise.getDifficulty());
    }
}
