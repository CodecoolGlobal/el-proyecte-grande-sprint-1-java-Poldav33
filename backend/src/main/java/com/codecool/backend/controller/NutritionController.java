package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.NutritionDTO;
import com.codecool.backend.service.NutritionService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Service
@RequestMapping("/api")
public class NutritionController {
    private final NutritionService nutritionService;
    public NutritionController(NutritionService nutritionService){
        this.nutritionService = nutritionService;
    }
    @GetMapping("/nutrition")
    public NutritionDTO getNutrition(@RequestParam String name){
        return nutritionService.filterNutrition(name);
    }

}
