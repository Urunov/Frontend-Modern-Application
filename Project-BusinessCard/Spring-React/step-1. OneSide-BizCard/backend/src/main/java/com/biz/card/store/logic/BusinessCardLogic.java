package com.biz.card.store.logic;

import com.biz.card.model.BusinessCard;
import com.biz.card.store.repository.BusinessCardRepository;
import com.biz.card.store.service.BusinessCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BusinessCardLogic implements BusinessCardService {
    //

    @Autowired
    BusinessCardRepository cardRepository;


    @Override
    public BusinessCard create(BusinessCard businessCard) {
        //
        return cardRepository.save(businessCard);
    }

    @Override
    public Optional<BusinessCard> retrieve(String cardId) {
        return cardRepository.findById(cardId);
    }

    @Override
    public List<BusinessCard> retrieveAll() {
        return cardRepository.findAll();
    }

    @Override
    public void update(BusinessCard businessCard) {

    }

    @Override
    public void delete(BusinessCard cardId) {
            cardRepository.delete(cardId);
    }

    @Override
    public boolean exists(String cardId) {

        Optional<BusinessCard> c = cardRepository.findById(cardId);
        return c.isEmpty();
    }
}
