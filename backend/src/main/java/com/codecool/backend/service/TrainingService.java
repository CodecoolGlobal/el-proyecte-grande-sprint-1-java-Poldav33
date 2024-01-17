package com.codecool.backend.service;

import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.model.Activity;
import com.codecool.backend.model.Exercise;
import com.codecool.backend.model.Training;
import com.codecool.backend.repository.ActivityRepository;
import com.codecool.backend.repository.ExerciseRepository;
import com.codecool.backend.repository.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class TrainingService {
    private TrainingRepository trainingRepository;
    private ActivityRepository activityRepository;
    private ExerciseRepository exerciseRepository;
    @Autowired
    public TrainingService(TrainingRepository trainingRepository, ActivityRepository activityRepository, ExerciseRepository exerciseRepository) {
        this.trainingRepository = trainingRepository;
        this.activityRepository = activityRepository;
        this.exerciseRepository = exerciseRepository;
    }
    public void saveTraining(TrainingDTO trainingDTO) {
        Optional<Exercise> optionalExercise = exerciseRepository.findById(trainingDTO.exerciseId());
        optionalExercise.ifPresent(exercise -> trainingRepository
                .save(new Training(
                        exercise,
                        trainingDTO.repeats(),
                        trainingDTO.amount(),
                        trainingDTO.durations())
                ));
    }
}