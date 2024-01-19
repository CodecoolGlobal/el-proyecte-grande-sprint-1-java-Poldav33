package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.ActivityDTO;
import com.codecool.backend.controller.dto.NewActivityDTO;
import com.codecool.backend.controller.dto.TrainingDTO;
import com.codecool.backend.model.Activity;
import com.codecool.backend.model.Training;
import com.codecool.backend.service.ActivityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {
    private final ActivityService activityService;
    private final Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }


    @PostMapping("")
    public Activity saveActivity(@RequestBody NewActivityDTO newActivityDTO) {
        return activityService.saveActivity(newActivityDTO);
    }

    @GetMapping("")
    public Activity getActivityById(@RequestParam Long id) {
        return activityService.getActivityById(id);
    }

    @PostMapping("/addtraining")
    public void addTraining(@RequestParam Long trainingId, @RequestParam Long activityId) {
        activityService.addTraining(trainingId, activityId);
    }
}
