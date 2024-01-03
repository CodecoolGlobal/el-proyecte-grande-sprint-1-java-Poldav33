package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.NewUserDTO;
import com.codecool.backend.controller.dto.SuccessDTO;
import com.codecool.backend.controller.dto.UserDTO;
import com.codecool.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody NewUserDTO newUserDTO) {

        if (userService.addUser(newUserDTO).success()) {
            return ResponseEntity.ok("New user added to the database.");
        } else {
            return ResponseEntity.badRequest().body("This user is already exist in the database!");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> userIsExistInDatabase (@RequestBody UserDTO userDTO) {
        if (userService.userExist(userDTO).success()) {
            return ResponseEntity.ok("Successful login.");
        } else {
            return ResponseEntity.badRequest().body("This user is already exist in the database!");
        }
    }
}
