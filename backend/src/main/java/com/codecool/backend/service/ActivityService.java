package com.codecool.backend.service;

import com.codecool.backend.controller.dto.NewActivityDTO;
import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.model.Activity;
import com.codecool.backend.model.Exercise;
import com.codecool.backend.model.Training;
import com.codecool.backend.model.UserEntity;
import com.codecool.backend.repository.ActivityRepository;
import com.codecool.backend.repository.ExerciseRepository;
import com.codecool.backend.repository.TrainingRepository;
import com.codecool.backend.repository.UserRepository;
import com.codecool.backend.security.jwt.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;
    private final UserRepository userRepository;
    private final TrainingRepository trainingRepository;
    private final ExerciseRepository exerciseRepository;
    private final JwtUtils jwtUtils;
    @Autowired
    public ActivityService(ActivityRepository activityRepository, UserRepository userRepository, TrainingRepository trainingRepository, ExerciseRepository exerciseRepository, JwtUtils jwtUtils) {
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
        this.trainingRepository = trainingRepository;
        this.exerciseRepository = exerciseRepository;
        this.jwtUtils = jwtUtils;
    }

    public Activity saveActivity(String authorizationHeader,NewActivityDTO newActivityDTO){
        String jwtToken = authorizationHeader.substring("Bearer ".length());

        Optional<UserEntity> userOptional = userRepository.findByUsername(jwtUtils.getUserNameFromJwtToken(jwtToken));
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            Activity newActivity = new Activity(
                    user,
                    newActivityDTO.date(),
                    newActivityDTO.description()
            );
            activityRepository.save(newActivity);
            for (TrainingDTO trainingDTO : newActivityDTO.trainingsDTO()) {
                Optional<Exercise> optionalExercise = exerciseRepository.findByName(trainingDTO.exerciseName());
                System.out.println(trainingDTO.duration());
                Training training = new Training(
                        optionalExercise.orElse(null),
                        trainingDTO.repeats(),
                        trainingDTO.amount(),
                        trainingDTO.duration(),
                        newActivity
                );
                if (training.getExercise() != null) {
                    trainingRepository.save(training);
                }
            }
            return newActivity;
        }
        return null;
    }
    public Activity getActivityById(Long id) {
        Optional<Activity> optionalActivity = activityRepository.findById(id);
        return optionalActivity.orElse(null);
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
    public List<Activity> getActivities() {
        return activityRepository.findAll();
    }
}
