import { getRandomValue } from '../helpers/randomValue.helper';
import { Locator } from '../support/types';
import { BasePage } from './base.page';
import { CartPage } from './cart.page';

export class ShopPage extends BasePage {
  url = '/shop/';
  cartPage = new CartPage();

  get productsList(): Locator {
    return cy.get('.products').find('.woocommerce-loop-product__title');
  }

  get myCartButton(): Locator {
    return cy.get('.top-cart');
  }

  get addToCartButton(): Locator {
    return cy.get('.products').find('.button');
  }

  constructor() {
    super();
  }

  addRandomProductToMyCart(): void {
    this.productsList.then(($txt) => {
      const count = $txt.length - 1;
      const randomProduct = getRandomValue(count);
      const text = $txt.eq(randomProduct).text().replace('–', '-');
      cy.log(text);
      cy.wrap(text).as('exceptedName');
      this.addToCartButton.eq(randomProduct).click();
    });
  }
  clickMyCartButton(): CartPage {
    this.myCartButton.click();

    cy.get('body').then(($body) => {
      if ($body.find(this.cartPage.cartEmptySelector).is(':visible')) {
        this.myCartButton.click();
      } else {
        assert.isOk('ok');
      }
    });
    return new CartPage();
  }
}
