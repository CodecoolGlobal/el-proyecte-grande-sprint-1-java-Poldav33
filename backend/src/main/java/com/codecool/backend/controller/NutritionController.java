package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.NutritionDTO;
import com.codecool.backend.service.NutritionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> getNutrition(@RequestParam String name){
        NutritionDTO fetchedNutrition = nutritionService.filterNutrition(name);
        if (fetchedNutrition != null) {
            return ResponseEntity.ok().body(fetchedNutrition);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This nutrition doesnt exist!");
    }

}
