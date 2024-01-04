package com.codecool.backend.repository;

import com.codecool.backend.model.Exercise;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import com.codecool.backend.controller.dto.FilterDTO;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ExerciseRepositoryAll {

    private final EntityManager entityManager;

    @Autowired
    public ExerciseRepositoryAll(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Exercise> filterExercise(FilterDTO filterDTO) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Exercise> query = cb.createQuery(Exercise.class);
        Root<Exercise> root = query.from(Exercise.class);
        List<Predicate> predicates = new ArrayList<>();

        if (!filterDTO.name().isEmpty()) {
            predicates.add(cb.like(root.get("name"),  "%" + filterDTO.name() + "%"));
        }
        if (!filterDTO.muscle().isEmpty()) {
            predicates.add(cb.like(root.get("muscle"), "%" + filterDTO.muscle() + "%"));
        }
        if (!filterDTO.type().isEmpty()) {
            predicates.add(cb.like(root.get("type"), "%" + filterDTO.type() + "%"));
        }
        if (!filterDTO.difficulty().isEmpty()) {
            predicates.add(cb.like(root.get("difficulty"), "%" + filterDTO.difficulty() + "%"));
        }
        Predicate[] predicateArray = predicates.toArray(new Predicate[0]);
        query.select(root).where(predicateArray);
        TypedQuery<Exercise> exerciseTypedQuery = entityManager.createQuery(query);
        List<Exercise> filteredExercises = exerciseTypedQuery.getResultList();
        return filteredExercises;
    }
}
