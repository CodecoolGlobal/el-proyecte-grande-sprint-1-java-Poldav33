package com.codecool.backend.controller.mapper;

import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.model.Training;

public class TrainingMapper {
    public TrainingMapper() {
    }

    public static TrainingDTO getTrainingDTOFromTraining(Training training) {
        return new TrainingDTO(
                training.getExerciseId(),
                training.getRepeats(),
                training.getAmount(),
                training.getDuration(),
                training.getActivityId()
                );
    }
}
