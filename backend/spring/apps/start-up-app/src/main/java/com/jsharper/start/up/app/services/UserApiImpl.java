package com.jsharper.start.up.app.services;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsharper.start.up.app.models.User;

@Service
public class UserApiImpl implements IUserApi {

    private List<User> users;

    public UserApiImpl() {
        var data = Arrays.asList(
                new User(UUID.randomUUID().toString(), "FirstName_1", "LastName_1"),
                new User(UUID.randomUUID().toString(), "FirstName_2", "LastName_2"),
                new User(UUID.randomUUID().toString(), "FirstName_3", "LastName_3"));
        this.users = new ArrayList<>(data);

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
        boolean isAny = this.users.stream().anyMatch((User uu) -> uu.id().equals(user.id()));

        if (isAny) {
            var message = MessageFormat.format("User id====> {0}", user.id());

            return ResponseEntity.status(409).eTag(message).build();
        }
        this.users.add(user);

        var message = MessageFormat.format("User {0} stored succesfully", user.toString());

        ResponseEntity<Void> response = ResponseEntity.status(201).eTag(message)
                .build();
        return response;
    }

    @Override
    public ResponseEntity<User> getByIdUser(String id) {
        throw new UnsupportedOperationException("Unimplemented method 'getByIdUser'");
    }

    @Override
    public ResponseEntity<Void> modifyUser(User user, String id) {
        throw new UnsupportedOperationException("Unimplemented method 'modifyUser'");
    }

    @Override
    public ResponseEntity<Void> deleteUser(String id) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

}
