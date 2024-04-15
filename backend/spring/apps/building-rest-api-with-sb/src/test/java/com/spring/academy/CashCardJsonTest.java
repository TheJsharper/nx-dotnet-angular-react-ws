package com.spring.academy;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;

import com.jayway.jsonpath.internal.Path;

@JsonTest
public class CashCardJsonTest {
    @Autowired
    private JacksonTester<CashCard> json;

    @Test
    void myFirstTest() {
        assertThat(42).isEqualTo(42);
    }

    @Test
    void cashCardSerializationTest() throws IOException {
        CashCard cashCard = new CashCard(99L, 123.45);
        java.nio.file.Path resourceDirectory = Paths.get("src","test","resources"); //Paths.get("src", "test","java", "com", "spring", "academy", "resources");
        String absolutePath = resourceDirectory.toFile().getAbsolutePath();;
        resourceDirectory.forEach((p)->{
            System.out.println("===>"+p.getFileName());
        } );
        System.out.println(absolutePath);

   /*      ClassLoader classLoader = getClass().getClassLoader();
        File file = new File(classLoader.getResource("expected.json").getFile());
        System.out.println(file.getAbsolutePath());
 */

        InputStream is = getClass().getClassLoader().getSystemResourceAsStream("expected.json"); //.getResourceAsStream(absolutePath+"/expected.json");

        /*
         * =
         * getClass().getClassLoader().getResourceAsStream("resources/expected.json");
         */
        assertThat(json.write(cashCard)).isStrictlyEqualToJson(is);
        assertThat(json.write(cashCard)).hasJsonPathNumberValue("@.id");
        assertThat(json.write(cashCard)).extractingJsonPathNumberValue("@.id")
                .isEqualTo(99);
        assertThat(json.write(cashCard)).hasJsonPathNumberValue("@.amount");
        assertThat(json.write(cashCard)).extractingJsonPathNumberValue("@.amount")
                .isEqualTo(123.45);

    }

    @Test
    void cashCardDeserializationTest() throws IOException {
        String expected = """
                {
                    "id":99,
                    "amount":123.45
                }
                """;
        assertThat(json.parse(expected))
                .isEqualTo(new CashCard(99L, 123.45));
        assertThat(json.parseObject(expected).id()).isEqualTo(99);
        assertThat(json.parseObject(expected).amount()).isEqualTo(123.45);
    }

}
