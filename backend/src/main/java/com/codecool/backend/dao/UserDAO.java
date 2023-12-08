package com.codecool.backend.dao;

import com.codecool.backend.controller.dto.NewUserDTO;

public interface UserDAO {
    boolean addUser(NewUserDTO newUserDTO);

}
