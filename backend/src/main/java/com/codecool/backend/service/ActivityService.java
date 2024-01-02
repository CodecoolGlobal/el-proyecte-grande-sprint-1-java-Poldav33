package com.codecool.backend.service;

import com.codecool.backend.dao.ActivityDAO;
import com.codecool.backend.dao.model.Activity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    private final ActivityDAO activityDAO;

    public ActivityService(ActivityDAO activityDAO) {
        this.activityDAO = activityDAO;
    }

    public List<Activity> getActivities() {
        return activityDAO.getActivities();
    }
}
