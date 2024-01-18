package com.codecool.backend.repository;

import com.codecool.backend.model.Training;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.Set;

public interface TrainingRepository extends JpaRepository<Training, Long> {
    Optional<Training> findById(Long id);
}
