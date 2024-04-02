package com.jsharper.start.up.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.UUID;

import org.assertj.core.api.Assertions;
import org.assertj.core.api.Condition;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.jsharper.start.up.app.models.User;
import com.jsharper.start.up.app.services.UserApiImpl;

@SpringBootTest(classes = { UserApiImpl.class })
public class UserApiImplTest {

    @Autowired
    private UserApiImpl userApiImpl;

    @Test
    public void getAllTest() {

        var all = userApiImpl.getAll().getBody();

        assertNotNull(all, () -> "not list delivery");
        
        Assertions.assertThat(all).hasSizeGreaterThan(2);

    }

    @Test
    public void addUserTest() {
        var id = UUID.randomUUID().toString();

        var user = getUser(id);

        userApiImpl.addUser(user);

        var saved = userApiImpl.getByIdUser(user.id()).getBody();

        assertNotNull(saved, () -> "Body is not present");

        assertEquals(saved, user);

    }

    @Test
    public void modifyUsertest() {
        var id = UUID.randomUUID().toString();

        var user = getUser(id);

        userApiImpl.addUser(user);

        var modified = new User(id, "Modified FirstName Test", "Modified LastName Test");

        userApiImpl.modifyUser(modified, id);

        var userModified = userApiImpl.getByIdUser(id).getBody();

        assertEquals(modified, userModified);
    }

    @Test
    public void deleteUserTest(){
        var id = UUID.randomUUID().toString();

        var user = getUser(id);

        userApiImpl.addUser(user);

        userApiImpl.deleteUser(id);

        var all = userApiImpl.getAll().getBody();

        Condition<User> criteria = new Condition<User>( u -> u.id().equals(user.id() ), "FOUND ===>%s", id );

        Assertions.assertThat(all).doNotHave(criteria);

    }

    private User getUser(String id) {
        return new User(id, "FirstName from Test", "LastName from Test");

    }
}
