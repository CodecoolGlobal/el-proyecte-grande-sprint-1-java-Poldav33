package com.codecool.backend.controller.mapper;

import com.codecool.backend.controller.dto.ActivityDTO;
import com.codecool.backend.controller.dto.NewActivityDTO;
import com.codecool.backend.model.Activity;
import com.codecool.backend.model.Training;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class ActivityMapper {

    public static NewActivityDTO getNewActivityDTO(Long userId, String date, String description) {
        return new NewActivityDTO(userId, date, description);
    }
    public static ActivityDTO getActivityDTO(Activity activity, Set<Training> trainings) {
        return new ActivityDTO(
                activity.getActivityId(),
                activity.getUserId(),
                LocalDate.parse(activity.getDate()),
                activity.getDescription(),
                trainings);
    }
}
