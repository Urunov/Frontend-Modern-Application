package com.biz.card.store.logic;

import com.biz.card.model.BusinessCard;
import com.biz.card.store.repository.BusinessCardRepository;
import com.biz.card.store.service.BusinessCardsInter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BusinessCardServices implements BusinessCardsInter {
    //

    private final BusinessCardRepository cardRepository;

    public BusinessCardServices(BusinessCardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }


    @Override
    public void create(BusinessCard businessCard) {
        //
        cardRepository.save(businessCard);
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
