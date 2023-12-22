package com.jsharper.start.up.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsharper.start.up.app.models.User;
import com.jsharper.start.up.app.services.IUserApi;

@RestController()
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private IUserApi userService;

    @GetMapping(path = "/")
    public ResponseEntity<List<User>> getUser() {

        return this.userService.getAll();
    }

    @PostMapping(path = "/")
    public ResponseEntity<Void> createUser(User user) {
        System.out.println("Request===>x" + user.firstName());
        return this.userService.addUser(user);
    }

}
