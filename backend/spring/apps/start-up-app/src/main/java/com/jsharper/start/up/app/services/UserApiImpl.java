package com.jsharper.start.up.app.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsharper.start.up.app.models.User;

@Service
public class UserApiImpl implements IUserApi {

    private List<User> users;

    public UserApiImpl() {
        var data = Arrays.asList(
                new User("FirstName_1", "LastName_1"),
                new User("FirstName_2", "LastName_2"),
                new User("FirstName_3", "LastName_3"));
        this.users = new ArrayList<>( data);

    }

    @Override
    public ResponseEntity<List<User>> getAll() {

        ResponseEntity<List<User>> response = ResponseEntity
                .status(HttpStatus.OK)
                .header("Custom-Header", "Custom-Value")
                .body(this.users);

        return response;

    }

    @Override
    public ResponseEntity<Void> addUser(User user) {
        this.users.add(user);
        ResponseEntity<Void> response = ResponseEntity.status(201).build();
        return response;
    }

}
