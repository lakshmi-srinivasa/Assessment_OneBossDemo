import { forgotDetails } from '../constants/selector';

const {
    validUsername,
    validPassword,
    invalidPassword,
    invalidUsername,
} = require('../fixtures/credentials.json');

const pageElements = {
    logo: '#logo',
    usernameField: ':nth-child(1) > .col-sm-4',
    passwordField: ':nth-child(2) > .col-sm-4',
    loginButton: '#btn > .btn',
    registerLink: "[onclick=\"window.location = 'register.xhtml';\"]",
    forgotPasswordLink: "[onclick=\"window.location = 'forgotpassword.xhtml?intent=forgot';\"]",
};

describe('Login Functionality', () => {

    beforeEach(() => {
        cy.visit('https://demo.oneboss.ca/repweb/client/login.xhtml')
    })

    context("Login Section of Client Portal", () => {
        it('should display the login form', () => {
            Object.values(pageElements).forEach((element) => cy.get(element).should('exist'));
        })

        it('Login page with valid credential', () => {
            cy.get(pageElements.usernameField).type(validUsername);
            cy.get(pageElements.passwordField).type(validPassword);
            cy.get(pageElements.loginButton).click();
            cy.url().should("equal", "https://demo.oneboss.ca/repweb/client/index.xhtml");
        })

        it('Login with Invalid credential with wrong password', () => {
            cy.get(pageElements.usernameField).type(validUsername);
            cy.get(pageElements.passwordField).type(invalidPassword);
            cy.get(pageElements.loginButton).click();
            cy.get('.alignTop > span').should('exist').and('contain.text', " Invalid. Please retry.");
        })

        it('Login with Invalid credential with wrong userid', () => {
            cy.get(pageElements.usernameField).type(invalidUsername);
            cy.get(pageElements.passwordField).type(validPassword);
            cy.get(pageElements.loginButton).click();
            cy.get('.alignTop > span').should('exist').and('contain.text', " Invalid. Please retry.");
        })

        it('Login with Invalid credential with wrong userid and wrong password', () => {
            cy.get(pageElements.usernameField).type(invalidUsername);
            cy.get(pageElements.passwordField).type(invalidPassword);
            cy.get(pageElements.loginButton).click();
            cy.get('.alignTop > span').should('exist').and('contain.text', " Invalid. Please retry.");
        })

        it('forgot password', () => {
            cy.get(pageElements.usernameField).type(validUsername);
            cy.get(pageElements.forgotPasswordLink).click();
            cy.url().should("equal", "https://demo.oneboss.ca/repweb/client/forgotpassword.xhtml?intent=forgot");
            cy.get('#forgotPasswordForm\\:j_idt14\\:0').click();
            cy.get(forgotDetails.emailAddress).type(validUsername);
            cy.get(forgotDetails.digitSin).type("782");
            cy.get(forgotDetails.Birth_year).select("2000");
            cy.get(forgotDetails.Birth_month).select("April");
            cy.get(forgotDetails.Birth_date).select("10");
            cy.get(forgotDetails.ConfirmBtn).click();
            cy.url().should("equal", "https://demo.oneboss.ca/repweb/client/forgotpassword.xhtml");
            cy.get('#j_idt45_header').should('exist').and('contain.text', "Attention");
            cy.get('td > span').should('exist').and('contain.text', "We have emailed you instructions on how to reset your password. The instructions will be valid for 48 hours.");
        });

        it('Register New User', () => {
            cy.get("[onclick=\"window.location = 'register.xhtml';\"]").click();
            cy.get('.form-control').type(validUsername);
            cy.get('#clientRegisterForm\\:j_idt19').click();
        })
    })
})
