package com.jsharper.start.up.app.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.jsharper.start.up.app.models.User;


public interface IUserApi {

        ResponseEntity<List<User>> getAll();

        ResponseEntity<User> getByIdUser(String id);

        ResponseEntity<Void> addUser(User user);

        ResponseEntity<Void> modifyUser(User user, String id);

        ResponseEntity<Void> deleteUser(String id);

}
