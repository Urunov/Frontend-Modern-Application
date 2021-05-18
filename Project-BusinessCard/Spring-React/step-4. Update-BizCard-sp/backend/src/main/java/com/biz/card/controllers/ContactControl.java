package com.biz.card.controllers;

import com.biz.card.models.Contact;
import com.biz.card.store.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
public class ContactControl {
    //
    @Autowired
    private ContactService contactService;

    @RequestMapping(method = RequestMethod.GET, value = "/contacts")
    public List<Contact> getAllCards()
    {
        return contactService.retrieveAll();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/contacts/name")
    public List<Contact> getAllCardsByName(String name)
    {

        Contact name1 = contactService.retrieveByName(name);
        if(name1.getName().equals("")){
            contactService.delete(name1.getId());
        }
        return contactService.retrieveAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/create")
    public Contact Store(@RequestBody Contact contact){
        contact = contactService.create(contact);
        return contact;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/contacts/{id}")
    public Optional<Contact> show(@PathVariable String id){
        return contactService.retrieve(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/contacts/{id}")
    public Contact update(@PathVariable String id, @RequestBody Contact contact){
        return contactService.update(id, contact);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/contacts/{id}")
    public String delete(@PathVariable String id){
        Optional<Contact> contactServices = (contactService.retrieve(id));
        Contact cardBusiness = contactServices.get();
        contactService.delete(cardBusiness.getId());
        return "Deleted";
    }

}
