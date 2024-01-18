package com.codecool.backend.controller;

import com.codecool.backend.controller.dto.NewUserDTO;
import com.codecool.backend.controller.dto.UserDTO;
import com.codecool.backend.model.payload.JwtResponse;
import com.codecool.backend.security.jwt.JwtUtils;
import com.codecool.backend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public UserController(UserService userService, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody NewUserDTO newUserDTO) {
        NewUserDTO userEncodedPass = new NewUserDTO(newUserDTO.username(), passwordEncoder.encode(newUserDTO.password()), newUserDTO.email());

        if (userService.addUser(userEncodedPass).success()) {
            return ResponseEntity.status(HttpStatusCode.valueOf(200)).body("New user added to the database.");
        } else {
            return ResponseEntity.badRequest().body("This user is already exist in the database!");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> userIsExistInDatabase (@RequestBody UserDTO userDTO) {
        if (userService.userExist(userDTO).success()) {
            try {
                Authentication authentication = authenticationManager
                        .authenticate(new UsernamePasswordAuthenticationToken(userDTO.username(), userDTO.password()));

                SecurityContextHolder.getContext().setAuthentication(authentication);

                String jwt = jwtUtils.generateJwtToken(authentication);

                User userDetails = (User) authentication.getPrincipal();

                List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority)
                        .toList();

                return ResponseEntity.ok()
                        .header(HttpHeaders.AUTHORIZATION,jwt)
                        .body(new JwtResponse(jwt,userDTO.username(),roles));
            } catch (Exception e) {
                return ResponseEntity.ok("This is from the catch: " + e.getMessage());
            }
        } else {
            return ResponseEntity.badRequest().body("This user is not exist in the database!");
        }
    }
}

// logging.level.org.springframework=trace