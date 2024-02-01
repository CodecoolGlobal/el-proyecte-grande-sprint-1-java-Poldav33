package com.codecool.backend.service;

import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.model.Exercise;
import com.codecool.backend.model.Training;
import com.codecool.backend.repository.ActivityRepository;
import com.codecool.backend.repository.ExerciseRepository;
import com.codecool.backend.repository.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainingService {
    private final TrainingRepository trainingRepository;
    private final ActivityRepository activityRepository;
    private final ExerciseRepository exerciseRepository;
    @Autowired
    public TrainingService(TrainingRepository trainingRepository, ActivityRepository activityRepository, ExerciseRepository exerciseRepository) {
        this.trainingRepository = trainingRepository;
        this.activityRepository = activityRepository;
        this.exerciseRepository = exerciseRepository;
    }
    public void saveTraining(TrainingDTO trainingDTO) {
        Optional<Exercise> optionalExercise = exerciseRepository.findByName(trainingDTO.exerciseName());
        optionalExercise.ifPresent(exercise -> trainingRepository
                .save(new Training(
                        exercise,
                        trainingDTO.repeats(),
                        trainingDTO.amount(),
                        trainingDTO.duration())
                ));
    }
    public List<Training> getTrainingsByActivityId(Long activityId) {
        return trainingRepository.findByActivity_Id(activityId);
    }
}