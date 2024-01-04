package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.FilterDTO;
import com.codecool.backend.controller.dto.ExerciseDTO;
import com.codecool.backend.model.Exercise;
import com.codecool.backend.service.ExerciseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    private final ExerciseService exerciseService;
    private final Logger logger = LoggerFactory.getLogger(getClass());

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("")
    public List<ExerciseDTO> getActivities() {
        List<ExerciseDTO> exerciseDTOS = new ArrayList<>();
        List<Exercise> exercises = exerciseService.getActivities();
        exercises.forEach(exercise -> {
            exerciseDTOS.add(new ExerciseDTO(
                    exercise.getId(),
                    exercise.getName(),
                    exercise.getType(),
                    exercise.getMuscle(),
                    exercise.getDifficulty()
            ));
        });
        return exerciseDTOS;
    }

    @GetMapping("test")
    public FilterDTO test() {
        return new FilterDTO("key", "value");
    }

    @PostMapping("filter")
    public ResponseEntity<List<Exercise>> getFilteredExercises(@RequestBody List<FilterDTO> filterDTOS) {
        try {
            return ResponseEntity.ok().body(exerciseService.getFilteredExercises(filterDTOS));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            logger.error(e.getMessage());
            return new ResponseEntity<>(HttpStatusCode.valueOf(404));
        }
    }

    private List<FilterDTO> createFilterDTOs() {
        return null;
    }

}
