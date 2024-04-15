package com.spring.academy;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cashcards")
public class CashCardController {
    @GetMapping("/{requestedId}")
    private ResponseEntity<String> findById() {
        
        return ResponseEntity.ok("{}");
     }
    @GetMapping("/{requestedId}/test")
    private ResponseEntity<CashCard> findByIdTest() {
        CashCard cashCard = new CashCard(99L, 123.45);
        return ResponseEntity.ok(cashCard);
     }
}
