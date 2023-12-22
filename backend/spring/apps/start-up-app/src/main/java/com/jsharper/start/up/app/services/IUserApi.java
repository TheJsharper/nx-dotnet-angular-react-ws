package com.jsharper.start.up.app.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.jsharper.start.up.app.models.User;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "User", description = "the User Api")
public interface IUserApi {
     @Operation(
            summary = "Fetch all users",
            description = "fetches all user entities and their data from data source")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successful operation")
    })
    ResponseEntity<List<User>> getAll();

    @Operation(
            summary = "add an user",
            description = "Adds a user to the list of plants")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "successfully added an user"),
            @ApiResponse(responseCode = "409", description = "duplicate users")
    })
    ResponseEntity<Void> addUser(@RequestBody User user);
}
