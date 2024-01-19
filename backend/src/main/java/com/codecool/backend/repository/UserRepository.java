package com.codecool.backend.repository;

import com.codecool.backend.model.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {

    Optional<UserEntity> findByUsernameAndPassword(String username, String password);

    Optional<UserEntity> findByUsername(String username);
    Optional<UserEntity> findByEmailAndPassword(String email, String password);
    Optional<UserEntity> findById(Long id);

}
