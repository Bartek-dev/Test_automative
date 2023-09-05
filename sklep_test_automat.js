/// <reference types="cypress" />

describe("Składanie zamówienia z panelu użytkownika", () => {
    it("Przejście do panelu rejestracji użytkownika", ()=>{
        cy.visit("/")
        cy.get(".top-account").click();
    })

    it("Logowanie się do konta", () =>{
        cy.get("#username").type("bartekkkk@wp.pl");
        cy.get("#password").type("janKowal12345@");
        cy.get('[name="login"]').click();
        cy.get(".page-title.margin-top").should("contain", "My account")
    })  
      
    
    it("Dodawanie produktu do koszyka", () =>{
        cy.get('[title="Most Wanted"]').click();
        cy.get('[data-product_id="31"]').click();
        cy.get('[data-product_id="29"]').click();
        cy.get('[data-product_id="27"]').click();

            cy.contains('a','Magnolia Dress').should("be.visible")
            cy.contains('a','Magnolia Dress').then (widac =>{
                expect(widac).to.be.visible
            })

                cy.contains('a','FITT Belts').should("be.visible")
                cy.contains('a','FITT Belts').then (widac =>{
                    expect(widac).to.be.visible
                })

                    cy.contains('a','Rocadi Jeans').should("be.visible")
                    cy.contains('a','Rocadi Jeans').then (widac =>{
                        expect(widac).to.be.visible
                    })
        cy.get(".top-cart").click();
    })    
    it("panel About us" , ()=>{
        cy.get('[title="About Us"]').click();
        cy.get('[name="your-name"]').type("Bartek");
        cy.get('[name="your-email"]').type("bartekkk@wp.pl");
        cy.get('[name="your-subject"]').type("testing");
        cy.get('[name="your-message"]').type("Hello world! Hello USA! It's only automative test on your page");
        cy.get('[value="Send"]').click();



    })
})
