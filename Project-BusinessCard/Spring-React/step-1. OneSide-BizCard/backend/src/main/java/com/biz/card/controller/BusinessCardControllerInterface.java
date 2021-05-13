//package com.biz.card.controller;
//
//import com.biz.card.model.BusinessCard;
//import com.biz.card.store.logic.BusinessCardServices;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RequestMapping
//@CrossOrigin
//public class BusinessCardControllerInterface {
//
//    @Autowired
//    private BusinessCardServices cardLogic;
//
//   // @RequestMapping(method = RequestMethod.GET, value = "/cards5")
//   @GetMapping("/cards")
//    public List<BusinessCard> getAllCards() {
//        return  cardLogic.retrieveAll();
//    }
//
//    @RequestMapping(method = RequestMethod.POST, value = "/create")
//    public BusinessCard Store(@RequestBody BusinessCard cardBusiness1){
//        cardLogic.create(cardBusiness1);
//        return cardBusiness1;
//    }
//
//    @RequestMapping(method = RequestMethod.GET, value = "/cards/{id}")
//    public Optional<BusinessCard> show(@PathVariable String id){
//        return cardLogic.retrieve(id);
//    }
//
//    @RequestMapping(method = RequestMethod.PUT, value = "/cards/{id}")
//    public BusinessCard update(@PathVariable String id, @RequestBody BusinessCard cardBusiness){
//
//        Optional<BusinessCard> cardBus = (cardLogic.retrieve(id));
//        BusinessCard cb = cardBus.get();
//
//        if(cardBusiness.getName()!=null){
//            cb.setName(cardBusiness.getName());
//        }
//
//        if(cardBusiness.getLastName()!=null){
//            cb.setLastName(cardBusiness.getLastName());
//        }
//
//        if(cardBusiness.getAddress()!=null){
//            cb.setAddress(cardBusiness.getAddress());
//        }
//        if(cardBusiness.getPhone()!=null){
//            cb.setPhone(cardBusiness.getPhone());
//        }
//
//        if(cardBusiness.getEmail()!=null){
//            cb.setEmail(cardBusiness.getEmail());
//        }
//
//        if(cardBusiness.getWebsite()!=null){
//            cb.setWebsite(cardBusiness.getWebsite());
//        }
//
//        if(cardBusiness.getPosition()!=null){
//            cb.setPosition(cardBusiness.getPosition());
//        }
//
//        if(cardBusiness.getPhotoUrl()!=null){
//            cb.setPhotoUrl(cardBusiness.getPhotoUrl());
//        }
//
//        if(cardBusiness.getMobilePhone()!=null){
//            cb.setMobilePhone(cardBusiness.getMobilePhone());
//        }
//
//        if(cardBusiness.getFax()!=null){
//            cb.setFax(cardBusiness.getFax());
//        }
//
//        if(cardBusiness.getSpecificJob()!=null){
//            cb.setSpecificJob(cardBusiness.getSpecificJob());
//        }
//
//
//
//        cardLogic.update(cb);
//
//        return cb;
//    }
//
//    @RequestMapping(method = RequestMethod.DELETE, value = "/cards/{id}")
//    public String delete(@PathVariable String id){
//        Optional<BusinessCard> optionalCardBusiness = (cardLogic.retrieve(id));
//        BusinessCard cardBusiness = optionalCardBusiness.get();
//        cardLogic.delete(cardBusiness);
//
//        return "Deleted";
//    }
//
//}
