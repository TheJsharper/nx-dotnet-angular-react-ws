package com.spring.academy;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ContextConfiguration;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = {
    BuildingRestApiWithSbApplication.class
})
@ContextConfiguration(classes = {BuildingRestApiWithSbApplication.class, SecuirtyConfig.class})
@DataJpaTest
//@RunWith(SpringRunner.class)
public class BuildingRestApiWithSbApplicationTests {
    @Test
    void contextLoads() {
    }

    @Autowired
    TestRestTemplate restTemplate;

    @Test
    void shouldReturnACashCardWhenDataIsSaved() {
        ResponseEntity<String> response = restTemplate.withBasicAuth("sarah1", "abc123").getForEntity("/cashcards/99",
                String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

    }

    @Test
    void shouldReturnACashCardWhenData() {
        ResponseEntity<String> response = restTemplate.withBasicAuth("sarah1", "abc123")
                .getForEntity("/cashcards/99/instance", String.class);

        DocumentContext documentContext = JsonPath.parse(response.getBody());
        Number id = documentContext.read("$.id");
        assertThat(id).isEqualTo(99);

        Double amount = documentContext.read("$.amount");
        assertThat(amount).isEqualTo(123.45);

    }

    @Test
    void shouldNotReturnNotFoundAndBodyBlank() {
        ResponseEntity<String> response = restTemplate.withBasicAuth("sarah1", "abc123")
                .getForEntity("/cashcards/1000/selected", String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        assertThat(response.getBody()).isBlank();
    }

    @Test
    void shouldNotReturnCashCardWithId99Selected() {
        ResponseEntity<String> response = restTemplate.withBasicAuth("sarah1", "abc123")
                .getForEntity("/cashcards/99/selected", String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(response.getBody());
        Number id = documentContext.read("$.id");
        assertThat(id).isEqualTo(99);

        Double amount = documentContext.read("$.amount");
        assertThat(amount).isEqualTo(123.45);
    }

    @Test
    void shouldNotReturnFindBy() {
        ResponseEntity<String> response = restTemplate.withBasicAuth("sarah1", "abc123")
                .getForEntity("/cashcards/99/repo", String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

        DocumentContext documentContext = JsonPath.parse(response.getBody());
        Number id = documentContext.read("$.id");
        assertThat(id).isEqualTo(99);

        Double amount = documentContext.read("$.amount");
        assertThat(amount).isEqualTo(123.45);
    }

    @Test
    @DirtiesContext
    void shouldUpdateAnExistingCashCard() {
        CashCard cashCardUpdate = new CashCard(null, 19.99, null);
        HttpEntity<CashCard> request = new HttpEntity<>(cashCardUpdate);
        ResponseEntity<Void> response = restTemplate
                .withBasicAuth("sarah1", "abc123")
                .exchange("/cashcards/99", HttpMethod.PUT, request, Void.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
    }

}
