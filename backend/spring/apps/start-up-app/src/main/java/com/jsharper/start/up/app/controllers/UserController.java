package com.jsharper.start.up.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsharper.start.up.app.models.User;
import com.jsharper.start.up.app.services.IUserApi;

@RestController()
public class UserController implements IUserApiDoc {

    @Autowired
    private IUserApi userService;

    @GetMapping(path = "/users/")
    public ResponseEntity<List<User>> getUser() {

        return this.userService.getAll();
    }

    @GetMapping(path = "/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {

        return this.userService.getByIdUser(id);
    }

    @PostMapping(path = "/users/")
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        return this.userService.addUser(user);
    }

    @PutMapping(path = "/users/{id}")
    public ResponseEntity<Void> modifyUser(@RequestBody User user, @PathVariable String id) {
        return this.userService.modifyUser(user, id);
    }

    @DeleteMapping(path = "/users/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable String id) {

        return this.userService.deleteUser(id);
    }

}
