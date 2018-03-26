package com.example.usersapi.controllers;


import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{userId}")
    public User findUserById(@PathVariable Long userId) {
        return userRepository.findOne(userId);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @DeleteMapping("/users/{userId}")
    public HttpStatus deleteUser(@PathVariable Long userId){
        userRepository.delete(userId);
        return HttpStatus.OK;
    }

    @PutMapping("/users/{userId}")
    public User updateUser(@PathVariable Long userId, @RequestBody User userRequest){
        User userFromDb = userRepository.findOne(userId);
        userFromDb.setFirstName(userRequest.getFirstName());
        userFromDb.setLastName(userRequest.getLastName());
        userFromDb.setPassword(userRequest.getPassword());
        userFromDb.setCity(userRequest.getCity());
        return userRepository.save(userFromDb);
    }
}