package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.NewUserDTO;
import com.codecool.backend.controller.dto.SuccessDTO;
import com.codecool.backend.controller.dto.UserDTO;
import com.codecool.backend.service.UserService;
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

    @PostMapping("/")
    public boolean addUser(@RequestBody NewUserDTO newUserDTO) {
        return userService.addUser(newUserDTO);
    }

    @PostMapping("/login")
    public SuccessDTO userIsExistInDatabase (@RequestBody UserDTO userDTO) {
        return userService.userExist(userDTO);
    }
}
