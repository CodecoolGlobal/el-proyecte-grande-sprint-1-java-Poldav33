package com.codecool.backend.service;

import com.codecool.backend.dao.ExerciseDAO;
import com.codecool.backend.dao.model.Exercise;
import com.codecool.backend.repository.ExerciseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    private final ExerciseDAO activityDAO;
    private final ExerciseRepository exerciseRepository;

    public ExerciseService(ExerciseDAO activityDAO, ExerciseRepository exerciseRepository) {
        this.activityDAO = activityDAO;
        this.exerciseRepository = exerciseRepository;
    }

    public List<Exercise> getActivities() {
        return activityDAO.getExercises();
    }
}
