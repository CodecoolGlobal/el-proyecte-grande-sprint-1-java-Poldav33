package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.NewActivityDTO;
import com.codecool.backend.model.Activity;
import com.codecool.backend.service.ActivityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
        Activity newActivity = activityService.saveActivity(newActivityDTO);
        if (newActivity != null) {
            return newActivity;
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND
            );
        }
    }

    @GetMapping("")
    public Activity getActivityById(@RequestParam Long id) {
        Optional<Activity> optionalActivity = activityService.getActivityById(id);
        if (optionalActivity.isPresent()) {
            return optionalActivity.get();
        } else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND
            );
        }
    }
}
