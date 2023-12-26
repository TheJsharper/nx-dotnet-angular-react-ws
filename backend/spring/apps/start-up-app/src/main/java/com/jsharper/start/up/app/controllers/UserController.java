package com.jsharper.start.up.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsharper.start.up.app.models.User;
import com.jsharper.start.up.app.services.IUserApi;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController()
public class UserController {

    @Autowired
    private IUserApi userService;

    @GetMapping(path = "/users/")
    public ResponseEntity<List<User>> getUser() {

        return this.userService.getAll();
    }

    @PostMapping(path = "/users/")
     @Operation(
            summary = "add an user",
            description = "Adds a user to the list of plants")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "successfully added an user"),
            @ApiResponse(responseCode = "409", description = "duplicate users")
    })
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        System.out.println("Request===>x" + user.firstName());
        return this.userService.addUser(user);
    }

}
