package com.spring.academy;

import org.springframework.data.repository.CrudRepository;
//@Repository
public interface CashCardRepository extends CrudRepository<CashCard, Long> {
    
}
