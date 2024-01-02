package com.codecool.backend.dao;

import com.codecool.backend.dao.model.Exercise;

import java.util.List;

public interface ExerciseDAO {
    List<Exercise> getExercises();
    List<Exercise> getFilteredExercises(String exercise);
}
