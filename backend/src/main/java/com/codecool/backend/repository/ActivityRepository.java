package com.codecool.backend.repository;

import com.codecool.backend.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository implements JpaRepository<Activity, Long> {

}
