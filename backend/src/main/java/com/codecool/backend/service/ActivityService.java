package com.codecool.backend.service;

import com.codecool.backend.controller.dto.NewActivityDTO;
import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.model.Activity;
import com.codecool.backend.model.Training;
import com.codecool.backend.model.UserEntity;
import com.codecool.backend.repository.ActivityRepository;
import com.codecool.backend.repository.ExerciseRepository;
import com.codecool.backend.repository.TrainingRepository;
import com.codecool.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ActivityService {
    private ActivityRepository activityRepository;
    private UserRepository userRepository;
    private TrainingRepository trainingRepository;
    private ExerciseRepository exerciseRepository;
    @Autowired
    public ActivityService(ActivityRepository activityRepository, UserRepository userRepository, TrainingRepository trainingRepository, ExerciseRepository exerciseRepository) {
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
        this.trainingRepository = trainingRepository;
        this.exerciseRepository = exerciseRepository;
    }

    public Activity saveActivity(NewActivityDTO newActivityDTO){
        Optional<UserEntity> userOptional = userRepository.findById(newActivityDTO.userId());
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            Activity newActivity = new Activity(
                    user,
                    newActivityDTO.date(),
                    newActivityDTO.description()
            );
            activityRepository.save(newActivity);
            System.out.println(newActivityDTO.trainingsDTO().length);
            for (TrainingDTO trainingDTO : newActivityDTO.trainingsDTO()) {
                System.out.println(trainingDTO.exerciseName());
                System.out.println(exerciseRepository.findByName(trainingDTO.exerciseName()).get());
                Training training = new Training(
                        exerciseRepository.findByName(trainingDTO.exerciseName()).get(),
                        trainingDTO.repeats(),
                        trainingDTO.amount(),
                        trainingDTO.durations(),
                        newActivity
                );
                trainingRepository.save(training);
            }
            return newActivity;
        }
        return null;
    }
    public Activity getActivityById(Long id) {
        Optional<Activity> optionalActivity = activityRepository.findById(id);
        if (optionalActivity.isPresent()) {
            Activity activity = optionalActivity.get();
            return activity;
        }
        return null;
    }
    public void addTraining(Long trainingId, Long activityId) {
        Optional<Training> trainingOptional = trainingRepository.findById(trainingId);
        Optional<Activity> activityOptional = activityRepository.findById(activityId);
        if (trainingOptional.isPresent() && activityOptional.isPresent()) {

            Training training = trainingOptional.get();
            Activity activity = activityOptional.get();

            activity.addTraining(training);
            training.setActivity(activity);

            trainingRepository.save(training);
            activityRepository.save(activity);
        }
    }
}
