package com.codecool.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name = "AppUser")

public class UserEntity {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String username;
    private String password;
    private String email;
    private Role role;

    public UserEntity(String name, String username, String password, String email, Role role) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public Role getRole() {
        return role;
    }

    public UserEntity() {
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}
