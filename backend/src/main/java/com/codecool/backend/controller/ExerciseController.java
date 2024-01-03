package com.codecool.backend.controller;

import com.codecool.backend.dao.model.Exercise;
import com.codecool.backend.service.ExerciseService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("")
    public List<Exercise> getActivities() {
        return exerciseService.getActivities();
    }

    @GetMapping("/filter")
    public List<Exercise> getFilteredActivities(){
        return null;
    }
}
