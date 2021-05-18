package com.biz.card.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "cards")
public class BusinessCard {
    //
    @Id
    private String cardId;
    private String name;
    private String lastName;
    private String address;
    private String email;
    private String phone;
    private String website;
    private String position;
    private String mobilePhone;
    private String fax;
    private String photoUrl; // Employee Photo
    private String specificJob;


    /*
    //    //back side(1)
    private String log;
    private String companyName;
    private String companyBizTitle;
    private String qrCode;

    //back side (2) - Different language
    private String nameNative;
    private String lastNameNative;
    private String addressNative;
    private String positionNative;
    private String specificJobNative;
    private String companyNameNative;

 */
}