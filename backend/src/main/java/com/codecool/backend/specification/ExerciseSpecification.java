package com.codecool.backend.specification;

import com.codecool.backend.controller.dto.FilterDTO;
import com.codecool.backend.dao.model.Exercise;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class ExersiceSpecification {

    public static Specification<Exercise> columnEqual(List<FilterDTO> filterDTOS) {

        return new Specification<Exercise>() {
            @Override
            public Predicate toPredicate(Root<Exercise> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

                List<Predicate> predicates = new ArrayList<>();
                filterDTOS.forEach(filter -> {
                    Predicate predicate = criteriaBuilder.equal(root.get(filter.columnName()), filter.columnValue());
                    predicates.add(predicate);
                });

                return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
            }
        };
    }
}
