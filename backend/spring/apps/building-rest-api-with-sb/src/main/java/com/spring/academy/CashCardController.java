package com.spring.academy;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cashcards")
public class CashCardController {

    private final CashCardRepository cardRepository;

    public CashCardController(CashCardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @GetMapping("/{requestedId}")
    private ResponseEntity<String> findById() {

        return ResponseEntity.ok("{}");
    }

    @GetMapping("/{requestedId}/instance")
    private ResponseEntity<CashCard> findByIdInstance() {
        CashCard cashCard = new CashCard(99L, 123.45, "");
        return ResponseEntity.ok(cashCard);
    }

    @GetMapping("/{requestedId}/selected")
    private ResponseEntity<CashCard> findByIdSelected(@PathVariable("requestedId") Long requestedId) {
        if (requestedId.equals(99L)) {
            CashCard cashCard = new CashCard(99L, 123.45, "");
            return ResponseEntity.ok(cashCard);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{requestedId}/repo")
    private ResponseEntity<CashCard> findById(@PathVariable("requestedId") Long requestedId) {
        Optional<CashCard> cashCardOptional = this.cardRepository.findById(requestedId);
        if (cashCardOptional.isPresent()) {
            return ResponseEntity.ok(cashCardOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{requestedId}")
    private ResponseEntity<Void> putCashCard(@PathVariable Long requestedId, @RequestBody CashCard cashCardUpdate) {
        // just return 204 NO CONTENT for now.
        return ResponseEntity.noContent().build();
    }
}
