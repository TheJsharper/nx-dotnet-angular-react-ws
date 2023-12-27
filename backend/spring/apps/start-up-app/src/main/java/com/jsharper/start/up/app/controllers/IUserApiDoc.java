package com.jsharper.start.up.app.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.jsharper.start.up.app.models.User;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "User", description = "the User Api ")
public interface IUserApiDoc {
    @Operation(summary = "Fetch all users", description = "fetches all user entities and their data from data source")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successful operation")
    })

    ResponseEntity<List<User>> getUser();

    @Operation(summary = "Fetch user", description = "fetches user entities by id and its data from data source")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successful operation"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND user")
    })
    ResponseEntity<User> getUserById(@PathVariable String id);

    @Operation(summary = "add an user", description = "Adds a user to the list of users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "successfully added an user"),
            @ApiResponse(responseCode = "409", description = "duplicate users")
    })
    ResponseEntity<Void> createUser(@RequestBody User user);

    @Operation(summary = "modify an user", description = "Modify a user to the list of users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "successfully added an user"),
            @ApiResponse(responseCode = "404", description = "not found user") })
    ResponseEntity<Void> modifyUser(@RequestBody User user, @PathVariable String id);

    @Operation(summary = "Delete an user", description = "delete user entities by id and its data from data source")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successful operation"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND user")
    })

    ResponseEntity<Void> deleteUserById(@PathVariable String id);
}
