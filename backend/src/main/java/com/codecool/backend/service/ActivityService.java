package com.codecool.backend.service;

import com.codecool.backend.controller.dto.NewActivityDTO;
import com.codecool.backend.model.Activity;
import com.codecool.backend.model.Training;
import com.codecool.backend.model.UserEntity;
import com.codecool.backend.repository.ActivityRepository;
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
    @Autowired
    public ActivityService(ActivityRepository activityRepository, UserRepository userRepository, TrainingRepository trainingRepository) {
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
        this.trainingRepository = trainingRepository;
    }
    public void saveActivity(NewActivityDTO newActivityDTO){
        Optional<UserEntity> userOptional = userRepository.findById(newActivityDTO.userId());
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            activityRepository.save(new Activity(
                    user,
                    newActivityDTO.date(),
                    newActivityDTO.description()
            ));
        }
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
