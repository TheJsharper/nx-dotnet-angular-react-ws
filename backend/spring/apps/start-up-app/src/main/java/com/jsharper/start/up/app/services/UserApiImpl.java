package com.jsharper.start.up.app.services;

import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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
        if (user.firstName() == null || user.firstName().length() == 1 || user.lastName() == null
                || user.lastName().length() == 1) {
            var message = MessageFormat.format("User id====> {0}", "none Match Schema wellforming");

            return ResponseEntity.status(422).eTag(message).build();
        }
        if(user.id() == null && user.id().length() > 4)
            this.users.add(new User(UUID.randomUUID().toString(), user.firstName(), user.lastName()));
        else
            this.users.add(user);

        var message = MessageFormat.format("User {0} stored succesfully", user.toString());

        ResponseEntity<Void> response = ResponseEntity.status(201).eTag(message)
                .build();
        return response;
    }

    @Override
    public ResponseEntity<User> getByIdUser(String id) {
        boolean isAny = this.users.stream().anyMatch((User uu) -> uu.id().equals(id));

        if (!isAny) {
            var message = MessageFormat.format("User id====> {0} NOT FOUND", id);

            return ResponseEntity.status(404).eTag(message).build();
        }
        var user = this.users.stream().filter((User u) -> u.id().equals(id)).findFirst().get();

        var message = MessageFormat.format("User {0} find succesfully", user.toString());

        ResponseEntity<User> response = ResponseEntity.status(200).eTag(message)
                .body(user);

        return response;
    }

    @Override
    public ResponseEntity<Void> modifyUser(User user, String id) {
        if (user.firstName() == null || user.firstName().length() == 1 || user.lastName() == null
                || user.lastName().length() == 1) {
            var message = MessageFormat.format("User id====> {0} message details {1}", user.id(),
                    "none Match Schema wellforming");

            return ResponseEntity.status(422).eTag(message).build();
        }
        boolean isAny = this.users.stream().anyMatch((User uu) -> uu.id().equals(id));

        if (!isAny) {
            var message = MessageFormat.format("User id====> {0} NOT FOUND", user.id());

            return ResponseEntity.status(404).eTag(message).build();
        }
        this.users = this.users.stream().map((User u) -> {
            if (u.id().equals(id))
                return new User(user.id(), user.firstName(), user.lastName());
            else
                return u;
        }).collect(Collectors.toList());

        var message = MessageFormat.format("User {0} modify succesfully", user.toString());

        ResponseEntity<Void> response = ResponseEntity.status(201).eTag(message)
                .build();
        return response;
    }

    @Override
    public ResponseEntity<Void> deleteUser(String id) {
        boolean isAny = this.users.stream().anyMatch((User uu) -> uu.id().equals(id));

        if (!isAny) {
            var message = MessageFormat.format("User id====> {0} NOT FOUND", id);

            return ResponseEntity.status(404).eTag(message).build();
        }
        this.users = this.users.stream().filter((User u) -> {
            return !u.id().equals(id);

        }).collect(Collectors.toList());

        var message = MessageFormat.format("User {0} deleted succesfully", id);

        ResponseEntity<Void> response = ResponseEntity.status(200).eTag(message)
                .build();
        return response;
    }

}
