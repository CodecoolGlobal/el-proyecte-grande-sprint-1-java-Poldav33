package com.codecool.backend.dao;

import com.codecool.backend.dao.model.Activity;

import java.util.List;

public interface ActivityDAO {
    List<Activity> getActivities();
    List<Activity> filteredActivities(String Activity);
}
