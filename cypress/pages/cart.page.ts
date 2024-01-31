import { Locator } from '../support/types';
import { BasePage } from './base.page';

/// <reference types="cypress" />

export class CartPage extends BasePage {
  url = '/cart/';

  cartEmptySelector = '.cart-empty';

  get productName(): Locator {
    return cy.get('.product-name').find('a');
  }
  get cartIsEmpty(): Locator {
    return cy.get(this.cartEmptySelector);
  }

  constructor() {
    super();
  }
}
