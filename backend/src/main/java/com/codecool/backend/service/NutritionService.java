package com.codecool.backend.service;

import com.codecool.backend.controller.dto.NutritionDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class NutritionService {
    private final WebClient webClient;

    public NutritionService(WebClient webClient) {
        this.webClient = webClient;
    }

    public NutritionDTO filterNutrition(String nutritionName){

        String url =String.format("https://api.api-ninjas.com/v1/nutrition?query=%s",nutritionName);
        NutritionDTO[] response = webClient
                .get()

                .uri(url)
                .header("X-Api-Key","QNJuoQnf4uL9zK4tQjPMtQ==dqdPHM40NATwEf6O")
                .retrieve()
                .bodyToMono(NutritionDTO[].class)
                .block();
        assert response != null;
        return new NutritionDTO(
                response[0].name(),
                response[0].calories(),
                response[0].fat_total_g(),
                response[0].carbohydrates_total_g(),
                response[0].fiber_g());
    }
}
