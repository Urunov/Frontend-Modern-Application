//package com.biz.card.controller;
//
//import com.biz.card.model.BusinessCard;
//import com.biz.card.store.repository.BusinessCardRepository;
//import com.biz.card.store.service.BusinessCardService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//public class BusinessCardController {
//
//
//    @Autowired
//    private BusinessCardRepository repository;
//
//    @Autowired
//    private BusinessCardService businessCardService;
//
//    @GetMapping("/")
//    public String getIndex(){
//        return "Just type=> locahost:8080/cards";
//    }
//
//     @GetMapping("/cards")
//    public List<BusinessCard> getAllCards(){
//        return businessCardService.retrieveAll();
//    }
//
//     @PostMapping("/cards/add")
//    public BusinessCard createCard(@RequestBody BusinessCard cards){
//        return repository.save(cards);
//    }
//
//    @GetMapping("/cards/{id}")
//    public Optional<BusinessCard> getCardsById(@PathVariable String id){
//
//        return repository.findById(id);
//    }
//
//    @PutMapping("/cards/{id}")
//    public BusinessCard updateCard(@PathVariable  String id, @RequestBody BusinessCard businessCard){
//
//        Optional<BusinessCard> bcards = repository.findById(id);
//
//        BusinessCard bc = bcards.get();
//       if(businessCard.getName()!=null)
//           bc.setName(businessCard.getName());
//
//       if(businessCard.getLastName()!=null)
//           bc.setLastName(businessCard.getLastName());
//
//       if (businessCard.getAddress()!=null)
//           bc.setAddress(businessCard.getAddress());
//
//       if(businessCard.getEmail()!=null)
//           bc.setEmail(businessCard.getEmail());
//
//       if(businessCard.getPhone()!=null)
//           bc.setPhone(businessCard.getPhone());
//
//       if(businessCard.getWebsite()!=null)
//           bc.setWebsite(businessCard.getWebsite());
//
//       if(businessCard.getPosition()!=null)
//            bc.setPosition(businessCard.getPosition());
//
//       if(businessCard.getMobilePhone()!=null)
//           bc.setMobilePhone(businessCard.getMobilePhone());
//
//       if(businessCard.getFax()!=null)
//           bc.setFax(businessCard.getFax());
//
//       if(businessCard.getPhotoUrl()!=null)
//           bc.setPhotoUrl(businessCard.getPhotoUrl());
//
//       if(businessCard.getSpecificJob()!=null)
//           bc.setSpecificJob(businessCard.getSpecificJob());
//
//
//        repository.save(bc);
//        return bc;
//
//    }
//
//    @DeleteMapping("/cards/{id}")
//    public String deleteCard(@PathVariable String id){
//        Optional<BusinessCard> businessCard = repository.findById(id);
//        BusinessCard card = businessCard.get();
//        repository.delete(card);
//
//        return "";
//    }
//
//}
