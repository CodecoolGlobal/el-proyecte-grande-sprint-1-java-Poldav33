package com.codecool.backend.service;

import com.codecool.backend.controller.dto.NewUserDTO;
import com.codecool.backend.controller.dto.SuccessDTO;
import com.codecool.backend.controller.dto.UserDTO;
import com.codecool.backend.model.Role;
import com.codecool.backend.model.UserEntity;
import com.codecool.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  
    private final UserRepository userRepository;

    public UserService( UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public SuccessDTO addUser(NewUserDTO newUserDTO, PasswordEncoder passwordEncoder) {
        if (userRepository.findByUsernameAndPassword(newUserDTO.username(), newUserDTO.password()).isPresent()) {
            return new SuccessDTO(false);
        }
        userRepository.save(new UserEntity(newUserDTO.username(), passwordEncoder.encode(newUserDTO.password()), newUserDTO.email(), Role.ROLE_USER));
        return new SuccessDTO(true);
    }

    public SuccessDTO userExist (UserDTO userDTO) {
       return new SuccessDTO(true);
    }

}
