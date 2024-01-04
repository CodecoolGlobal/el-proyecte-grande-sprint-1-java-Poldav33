package com.codecool.backend.repository;

import com.codecool.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long>, CrudRepository<User, Long> {

    Optional<User> findByUsernameAndPassword(String name, String password);

}
