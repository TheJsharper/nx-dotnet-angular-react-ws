package com.jsharper.start.up.app.controllers;

import com.jsharper.start.up.app.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import java.util.Arrays;

@RestController()
@RequestMapping(path = "/users")
public class UserController {

    @GetMapping(path = "/")
    public List<User> getUser() {
        var data = Arrays.asList(
                new User("FirstName_1", "LastName_1"),
                new User("FirstName_2", "LastName_2"),
                new User("FirstName_3", "LastName_3"));
        return data;
    }

}
