/// <reference types= "cypress" />

describe("This test is to validate that users can succesfully add a course on quales website ", () => {
    it("Verify user with correct credentials can add a course in the app", () => {
        //cypress visits quales academy url
        cy.visit("https://academy.quales.tech/login");
        //cypress fetches the username/email address field and inputs valid email
        cy.get('[data-testid="EmailAddress"]').type("ay@mail.com")

        //cypress fetches the password field and inputs the password
        cy.get('[data-testid="Password"]').type("pass1234")

        //cypress clicks the login button
        cy.get('.MuiButton-contained').click();

        //cypress fetches the login succesfully
        cy.contains("Login Successful").
            //cypress confirms that the login successful text is visible
            should("be.visible");

        //cypress clicks the add course button
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click();

        //Cypress fetches the course title field and inputs the title
        cy.viewport("macbook-16")
        cy.get('[data-testid="Title*"]').type("Cypress API Course by Tofunmi")

        //cypress fetches the course description field and inputs course description 
        cy.get('[data-testid="Description*"]').type("Tofunmi Cypress Automation")

        cy.get('#demo-simple-select').click();

        cy.contains("Product Design").
            //cypress confirms that the Product Design text is visible
            should("be.visible");

        // cypress selects a catergory option
        cy.get('[data-value="2"]').click();

        //cypress clicks the premium field
        // cy.get('[data-testid="isPremium"]').click();

        //cypress fetches the image description field and inputs an image url
        cy.get('[data-testid="ImageURL"]').type("https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80")

        //cypress clicks the offline option
        cy.get('[data-testid="offline"]').click();

        //cypress fetches the address field for the offline option and inputs an address
        cy.get('[data-testid="Address*"]').type("Quales address");
        cy.contains("Add Course").click();
        cy.contains("Course created successfully").should("be.visible")

    });
});