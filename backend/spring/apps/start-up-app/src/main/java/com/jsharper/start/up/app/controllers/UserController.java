package com.jsharper.start.up.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsharper.start.up.app.models.User;
import com.jsharper.start.up.app.services.IUserApi;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController()
@Tag(name = "User", description = "the User Api")
public class UserController {

    @Autowired
    private IUserApi userService;

    @GetMapping(path = "/users/")
    @Operation(summary = "Fetch all users", description = "fetches all user entities and their data from data source")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successful operation")
    })
    public ResponseEntity<List<User>> getUser() {

        return this.userService.getAll();
    }

    @PostMapping(path = "/users/")
    @Operation(summary = "add an user", description = "Adds a user to the list of users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "successfully added an user"),
            @ApiResponse(responseCode = "409", description = "duplicate users")
    })
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        return this.userService.addUser(user);
    }

    @PutMapping(path = "/users/{id}")
    @Operation(summary = "modify an user", description = "Modify a user to the list of users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "successfully added an user"),
            @ApiResponse(responseCode = "404", description = "not found user") })
    public ResponseEntity<Void> modifyUser(@RequestBody User user, @PathVariable String id) {
        return this.userService.modifyUser(user, id);
    }

}
