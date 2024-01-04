package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.FilterDTO;
import com.codecool.backend.model.Exercise;
import com.codecool.backend.service.ExerciseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

//    @GetMapping("")
//    public List<Exercise> getExercises() {
//        return exerciseService.getActivities();
//    }

    @PostMapping("/filter")
    public List<Exercise> getFilteredExercises(@RequestBody FilterDTO filterDTO){
        return exerciseService.getFilterByDifficulty(filterDTO);
    }

}
