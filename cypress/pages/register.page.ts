import { RegisterUserModel } from '../models/user.model';
import { Locator } from '../support/types';
import { BasePage } from './base.page';

export class RegisterPage extends BasePage {
  url = '/my-account';

  get registerEmailInput(): Locator {
    return cy.get('#reg_email');
  }
  get registerPasswordInput(): Locator {
    return cy.get('#reg_password');
  }
  get registerButton(): Locator {
    return cy.get('input[name="register"]');
  }
  get welcomeText(): Locator {
    return cy.get('.woocommerce-MyAccount-content').first();
  }
  get emailErrorText(): Locator {
    return cy.get('.woocommerce-error');
  }
  constructor() {
    super();
  }

  registerNewUser(registerUserData: RegisterUserModel): void {
    this.registerEmailInput.type(registerUserData.userEmail, { delay: 50 });
    this.registerPasswordInput.type(registerUserData.userPassword, {
      delay: 50,
    });
    this.registerButton.click();
  }

  expectedWelcomeText(userName: string): string {
    return `Hello ${userName} (not ${userName}? Log out)`;
  }
}
