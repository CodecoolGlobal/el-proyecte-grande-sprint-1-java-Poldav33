package com.codecool.backend.service;

import com.codecool.backend.controller.dto.NutritionDTO;
import com.codecool.backend.model.Nutrition;
import com.codecool.backend.repository.NutritionRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class NutritionService {
    private final WebClient webClient;
    private final NutritionRepository nutritionRepository;
    @Value("${API_KEY_HOLDER}")
    private String apiKey;

    public NutritionService(WebClient webClient, NutritionRepository nutritionRepository) {
        this.webClient = webClient;
        this.nutritionRepository = nutritionRepository;
    }

    public NutritionDTO filterNutrition(String nutritionName){
        Nutrition nutritionObj = null;


        if (nutritionRepository.findByName(nutritionName).isPresent()) {
            nutritionObj = nutritionRepository.findByName(nutritionName).get();
            return new NutritionDTO(nutritionObj.getName(),nutritionObj.getCalories(),nutritionObj.getFat_total_g(),nutritionObj.getCarbohydrates_total_g(),nutritionObj.getFiber_g());
        }

        String url =String.format("https://api.api-ninjas.com/v1/nutrition?query=%s",nutritionName);
        NutritionDTO[] response = webClient
                .get()
                .uri(url)
                .header("X-Api-Key",apiKey)
                .retrieve()
                .bodyToMono(NutritionDTO[].class)
                .block();
        assert response != null;

        nutritionRepository.save(new Nutrition(response[0].name(),
                response[0].calories(),
                response[0].fat_total_g(),
                response[0].carbohydrates_total_g(),
                response[0].fiber_g()));

        return response[0];
    }
}
