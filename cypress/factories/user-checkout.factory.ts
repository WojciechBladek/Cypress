import { faker } from '@faker-js/faker/locale/en';
import { UserCheckoutDataModel } from 'cypress/models/user-checkout.model';

export function randomUserCheckoutDataModel(): UserCheckoutDataModel {
  const CheckoutUserData: UserCheckoutDataModel = {
    userFirstName: faker.person.firstName().replace(/[^A-Za-z]/g, ''),
    userLastName: faker.person.lastName().replace(/[^A-Za-z]/g, ''),
    userStreetAddress: faker.location.street().replace(/[^A-Za-z]/g, ''),
    userPostCode: faker.location.zipCode('#####'),
    userTownCity: faker.location.city().replace(/[^A-Za-z]/g, ''),
    userPhone: faker.phone.number('501-###-###'),
  };

  return CheckoutUserData;
}
