package com.biz.card.store.service;

import com.biz.card.models.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    //
    Contact create(Contact contact);
    Optional<Contact> retrieve(String id);
    List<Contact> retrieveAll();
    Contact update(String id, Contact contact);
    void delete(String id);
    boolean exists(String id);
    Contact retrieveByName(String name);

}
