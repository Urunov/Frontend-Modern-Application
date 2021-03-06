package com.biz.card.controller;

import com.biz.card.model.BusinessCard;
import com.biz.card.store.service.BusinessCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class BusinessCardControl {

    @Autowired
    private BusinessCardService businessCardService;

    @RequestMapping(method = RequestMethod.GET, value = "/cards")
    public List<BusinessCard> getAllCards() {
        return  businessCardService.retrieveAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/cards/add")
    public BusinessCard Store(@RequestBody BusinessCard cardBusiness){
        cardBusiness = businessCardService.create(cardBusiness);
        return cardBusiness;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/cards/{id}")
    public Optional<BusinessCard> show(@PathVariable String id){
        return businessCardService.retrieve(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/cards/{id}")
    public BusinessCard update(@PathVariable String id, @RequestBody BusinessCard cardBusiness){

        Optional<BusinessCard> cardBus = (businessCardService.retrieve(id));
        BusinessCard cb = cardBus.get();

        if(cardBusiness.getName()!=null){
            cb.setName(cardBusiness.getName());
        }

        if(cardBusiness.getLastName()!=null){
            cb.setLastName(cardBusiness.getLastName());
        }

        if(cardBusiness.getAddress()!=null){
            cb.setAddress(cardBusiness.getAddress());
        }
        if(cardBusiness.getPhone()!=null){
            cb.setPhone(cardBusiness.getPhone());
        }

        if(cardBusiness.getEmail()!=null){
            cb.setEmail(cardBusiness.getEmail());
        }

        if(cardBusiness.getWebsite()!=null){
            cb.setWebsite(cardBusiness.getWebsite());
        }

        if(cardBusiness.getPosition()!=null){
            cb.setPosition(cardBusiness.getPosition());
        }

        if(cardBusiness.getPhotoUrl()!=null){
            cb.setPhotoUrl(cardBusiness.getPhotoUrl());
        }

        if(cardBusiness.getMobilePhone()!=null){
            cb.setMobilePhone(cardBusiness.getMobilePhone());
        }

        if(cardBusiness.getFax()!=null){
            cb.setFax(cardBusiness.getFax());
        }

        if(cardBusiness.getSpecificJob()!=null){
            cb.setSpecificJob(cardBusiness.getSpecificJob());
        }

        businessCardService.update(cb);
        return cb;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/cards/{id}")
    public String delete(@PathVariable String id){
        Optional<BusinessCard> optionalCardBusiness = (businessCardService.retrieve(id));
        BusinessCard cardBusiness = optionalCardBusiness.get();
        businessCardService.delete(cardBusiness);

        return "Deleted";
    }

}
