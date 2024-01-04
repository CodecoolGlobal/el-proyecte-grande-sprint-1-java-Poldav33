package com.codecool.backend.repository;

import com.codecool.backend.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ExerciseRepository extends JpaRepository<Exercise, Long>, CrudRepository<Activity, Long> {
    Optional<Exercise> findById(long id);
}
