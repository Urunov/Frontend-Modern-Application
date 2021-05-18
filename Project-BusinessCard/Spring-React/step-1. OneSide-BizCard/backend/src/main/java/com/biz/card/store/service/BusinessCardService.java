package com.biz.card.store.service;

import com.biz.card.model.BusinessCard;


import java.util.List;
import java.util.Optional;

public interface BusinessCardService {
    //
     BusinessCard create(BusinessCard businessCard);
     Optional<BusinessCard> retrieve(String cardId);
     List<BusinessCard> retrieveAll();
     void update(BusinessCard businessCard);
     void delete(BusinessCard cardId);
     public boolean exists(String cardId);



}
