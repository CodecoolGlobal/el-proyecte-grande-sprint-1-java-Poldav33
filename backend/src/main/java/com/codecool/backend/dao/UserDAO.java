package com.codecool.backend.dao;

import com.codecool.backend.controller.dto.NewUserDTO;
import com.codecool.backend.controller.dto.UserDTO;

public interface UserDAO {
    boolean addUser(NewUserDTO newUserDTO);
    boolean checkUser (UserDTO userDTO);

}
