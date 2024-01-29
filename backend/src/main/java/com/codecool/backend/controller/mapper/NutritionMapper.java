package com.codecool.backend.controller.mapper;

import com.codecool.backend.controller.dto.NutritionDTO;
import com.codecool.backend.model.Nutrition;

public class NutritionMapper {
    public static NutritionDTO getNutritionDTOFromNutrition(Nutrition nutrition){
        return (
                new NutritionDTO(
                        nutrition.getName(),
                        nutrition.getCalories(),
                        nutrition.getFat_total_g(),
                        nutrition.getCarbohydrates_total_g(),
                        nutrition.getFiber_g()
                )
        );
    }
}
