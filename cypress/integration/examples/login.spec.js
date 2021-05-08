/// <reference types='cypress' />

describe("Testing login functionality", () => {
    it.only("Login success", () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".radius").click()
      //  cy.url().should("include", "secure")
        //To make it fail
        cy.url().should("include", "Login success")
    })
    it("Login Failure-Username",
        // {
        // "retries": {
        //     runMode: 2,
        //     openMode : 2
        // }
        // },
        () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type("tom")
        cy.get("#password").type("SuperSecretPassword!")
        cy.get(".radius").click()
        //cy.get(".flash").should("contain", "Your username is invalid!")
        //To make it fail
        cy.get(".flash").should("contain", "Your user is invalid!")
    })
    it("Login Failure-Password", () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type("tomsmith")
        cy.get("#password").type("SuperSecret")
        cy.get(".radius").click()
        cy.get(".flash").should("contain", "Your password is invalid!")
    })
})