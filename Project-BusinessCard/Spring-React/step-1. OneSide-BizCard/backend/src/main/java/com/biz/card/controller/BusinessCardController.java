package com.biz.card.controller;

import com.biz.card.model.BusinessCard;
import com.biz.card.store.repository.BusinessCardRepository;
import com.biz.card.util.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin
public class BusinessCardController {


    @Autowired
    private BusinessCardRepository repository;

    @GetMapping("/")
    public String getIndex(){
        return "Just type=> locahost:8080/cards";
    }

     @GetMapping("/cards")
    public List<BusinessCard> getAllCards(){
        return repository.findAll();
    }

     @PostMapping("/cards/add")
    public BusinessCard createCard(@RequestBody BusinessCard cards){
        return repository.save(cards);
    }

     @GetMapping("/cards/{id}")
    public ResponseEntity<BusinessCard> getCardsById(@PathVariable String id){

        BusinessCard cardss = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(" Card not exist : " + id));
        return ResponseEntity.ok(cardss);
    }


     @PutMapping("/cards/{id}")
    public ResponseEntity<BusinessCard> updateCard(@PathVariable  String id, @RequestBody BusinessCard businessCard){

        BusinessCard bcards = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(" Card not exist: " + id));

        bcards.setName(bcards.getName());


        BusinessCard updateCard = repository.save(bcards);
        return ResponseEntity.ok(updateCard);

    }

     @DeleteMapping("/card/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCard(@PathVariable String id) {
        BusinessCard cards = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist: "+ id));

        repository.delete(cards);

        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
