/// <reference types= "cypress" />

describe("This test is to validate login scenarios into the quales app", () => {
    it("Verify user with correct credentials can login to the app", () => {
        //cypress visits quales academy url
        cy.visit("https://academy.quales.tech/login");
        //cypress fetches the username/email address field
        cy.get('[data-testid="EmailAddress"]').type("ay@mail.com")

        //cypress fetches the password field
        cy.get('[data-testid="Password"]').type("pass1234")

        //cypress clicks the login button
        cy.get('.MuiButton-contained').click();

        //cypress fetches the login succesfully
        cy.contains("Login Successful").
            //cypress confirms that the login successful text is visible
            should("be.visible");
    });
});