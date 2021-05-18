package com.biz.card.store.repository;

import com.biz.card.model.BusinessCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BusinessCardRepository extends MongoRepository<BusinessCard, String> {
    List<BusinessCard> findAll();
}
