package com.codecool.backend.specification;

import com.codecool.backend.controller.dto.FilterDTO;
import com.codecool.backend.model.Exercise;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ExerciseSpecification {

    public static Specification<Exercise> columnEqual(List<FilterDTO> filterDTOS) {

        return (root, query, criteriaBuilder) -> {

            List<Predicate> predicates = new ArrayList<>();
            filterDTOS.forEach(filter -> {
                Predicate predicate = criteriaBuilder.like(root.get(filter.columnName()), "%" + filter.columnValue() + "%");
                predicates.add(predicate);
            });

            return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
        };
    }
}
