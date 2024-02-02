package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.model.Training;
import com.codecool.backend.service.TrainingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trainings")
public class TrainingController {
    private TrainingService trainingService;
    @Autowired
    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }
    @PostMapping("/add")
    public void saveTraining(@RequestBody TrainingDTO trainingDTO) {
        trainingService.saveTraining(trainingDTO);
    }

    @GetMapping("")
    public List<Training> getTrainingsByActivityId(@RequestParam Long activityId) {
        return trainingService.getTrainingsByActivityId(activityId);
    }
}
