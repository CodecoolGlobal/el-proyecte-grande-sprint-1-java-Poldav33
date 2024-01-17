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
import java.util.Map;

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

    @GetMapping("filter")
    public List<Exercise> getFilteredExercises(@RequestParam Map<String, String> filters) {
        try {
            return exerciseService.getFilteredExercises(createFilterDTOs(filters));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            logger.error(e.getMessage());
            return null;
        }
    }

    private List<FilterDTO> createFilterDTOs(Map<String,String> filterMap) {
        List<FilterDTO> filterDTOS = new ArrayList<>();
        for (Map.Entry<String, String> filter : filterMap.entrySet()) {
            if (!filter.getValue().isEmpty()) {
                filterDTOS.add(new FilterDTO(filter.getKey(), filter.getValue()));
            }
        }
        return filterDTOS;
    }

}
