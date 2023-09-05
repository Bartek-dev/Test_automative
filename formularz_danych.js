/// <reference types="cypress" />

describe("formularz wypełnienia adresu dostawy", ()=>{
    it("przejście do panelu logowania", ()=>{
        cy.visit("/");
        cy.get(".top-account").click();
    })

    it("Logowanie się do konta", () =>{
        cy.get("#username").type("bartekk@www.pl");
        cy.get("#password").type("asdasdasd");
        cy.get('[name="login"]').click();
        cy.get(".page-title.margin-top").should("contain", "My account")
    })  

    it("Przejście do panelu wypełniania adresu", () =>{
        cy.contains('a','Addresses').click();
        cy.get("#username").type("bartekk@www.pl");
        cy.get("#password").type("asdasdasd");
        cy.get('[name="login"]').click();
        cy.get("h1.page-title.margin-top").should("contain", "Addresses");
        cy.contains('h3','Billing address');
        cy.get('a.edit').first().click();
        
    })
    it("Wypełnianie danymi", () =>{
        cy.get('#billing_first_name').type("Bartek"); 
        cy.get('#billing_last_name').type("Koma");
        cy.get('#billing_company').type("Informatics");
        cy.get('#billing_address_1').type("123 Pitulice");
        cy.get('#billing_address_2').type("Lubelskie");
        cy.get('#billing_postcode').type("12-234");
        cy.get('#billing_city').type("Puławy");
        cy.get('#billing_phone').type("987654321");
        cy.get('input[name="save_address"]').click();
        cy.get("#username").type("bartekk@www.pl");
        cy.get("#password").type("asdasdasd");
        cy.get('[name="login"]').click();
        cy.contains('a','Addresses').click();
        
    })
   
})