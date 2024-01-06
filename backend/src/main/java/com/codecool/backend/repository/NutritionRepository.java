package com.codecool.backend.repository;

import com.codecool.backend.model.Nutrition;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NutritionRepository  extends JpaRepository<Nutrition, Long> {

    Optional<Nutrition> findByName(String name);

}
