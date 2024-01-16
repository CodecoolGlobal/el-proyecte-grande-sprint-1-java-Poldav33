package com.codecool.backend.repository;

import com.codecool.backend.model.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    Optional<UserEntity> findByEmailAndPassword(String email, String password);

    Optional<UserEntity> findByName (String name);

}
