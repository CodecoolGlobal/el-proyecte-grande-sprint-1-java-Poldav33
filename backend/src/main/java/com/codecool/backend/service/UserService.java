package com.codecool.backend.service;

import com.codecool.backend.controller.dto.NewUserDTO;
import com.codecool.backend.controller.dto.SuccessDTO;
import com.codecool.backend.controller.dto.UserDTO;
import com.codecool.backend.dao.UserDAO;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public boolean addUser(NewUserDTO newUserDTO) {
        return userDAO.addUser(newUserDTO);
    }

    public SuccessDTO userExist (UserDTO userDTO) {
       return new SuccessDTO(userDAO.checkUser(userDTO));
    }
}
