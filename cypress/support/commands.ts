import { RegisterPage } from '../pages/register.page';
import { randomUserData } from 'cypress/factories/user.factory';

// commands please read more here:
// https://on.cypress.io/custom-commands

Cypress.Commands.add('login', () => {
  cy.session('Login with new user', () => {
    const registerUserData = randomUserData();
    const registerPage = new RegisterPage();
    registerPage.goto();
    registerPage.registerNewUser(registerUserData);
  });
});
