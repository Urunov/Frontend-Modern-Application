package com.biz.card.store.logic;

import com.biz.card.models.Contact;
import com.biz.card.store.repository.ContactRepository;
import com.biz.card.store.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactLogic implements ContactService {

    @Autowired
    ContactRepository contactRepository;

    @Override
    public Contact create(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact retrieveByName(String name) {
        return contactRepository.findByName(name);
    }

    @Override
    public Optional<Contact> retrieve(String id) {
        return contactRepository.findById(id);
    }

    @Override
    public List<Contact> retrieveAll() {
        return contactRepository.findAll();
    }

    @Override
    public Contact update(String id, Contact contact) {
           Optional<Contact> contact1 = contactRepository.findById(id);
           Contact contactAgain = contact1.get();

        if(contact.getName()!=null)
            contactAgain.setName(contact.getName());

        if(contact.getLastName()!=null)
            contactAgain.setLastName(contact.getLastName());

        if(contact.getAddress()!=null)
            contactAgain.setAddress(contact.getAddress());

        if(contact.getPhone()!=null)
            contactAgain.setPhone(contact.getPhone());

        if(contact.getEmail()!=null)
            contactAgain.setEmail(contact.getEmail());

        if(contact.getWebsite()!=null)
            contactAgain.setWebsite(contact.getWebsite());

        if(contact.getPosition()!=null)
            contactAgain.setPosition(contact.getPosition());

        if(contact.getPhotoUrl()!=null)
            contactAgain.setPhotoUrl(contact.getPhotoUrl());

        if(contact.getMobilePhone()!=null)
            contactAgain.setMobilePhone(contact.getMobilePhone());

        if(contact.getFax()!=null)
            contactAgain.setFax(contact.getFax());

        if(contact.getSpecificJob()!=null)
            contactAgain.setSpecificJob(contact.getSpecificJob());

        contactRepository.save(contactAgain);

        return contactAgain;
    }

    @Override
    public void delete(String id) {
           contactRepository.deleteById(id);
    }

    @Override
    public boolean exists(String id) {

        Optional<Contact> contact = contactRepository.findById(id);
        return contact.isPresent();
    }
}
