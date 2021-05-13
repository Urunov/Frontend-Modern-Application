package com.biz.card.store.repository;

import com.biz.card.model.BusinessCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BusinessCardRepository extends MongoRepository<BusinessCard, String> {

}
