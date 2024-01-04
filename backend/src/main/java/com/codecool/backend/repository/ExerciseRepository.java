package com.codecool.backend.repository;

import com.codecool.backend.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ExerciseRepository extends JpaRepository<Exercise, Long>{
    Optional<Exercise> findByName(String name);
    Optional<Exercise> findByType(String type);
    Optional<Exercise> findByDifficulty(String difficulty);
    Optional<Exercise> findByMuscle(String muscle);


}
