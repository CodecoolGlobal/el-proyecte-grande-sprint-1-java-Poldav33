package com.codecool.backend.repository;

import com.codecool.backend.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long>, JpaSpecificationExecutor<Exercise> {
    Optional<Exercise> findById(long id);
    Optional<Exercise> findByName(String name);
}
