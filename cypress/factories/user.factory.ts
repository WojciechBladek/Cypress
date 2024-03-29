import { faker } from '@faker-js/faker/locale/en';
import { RegisterUserModel } from 'cypress/models/user.model';

export function randomUserData(): RegisterUserModel {
  const firstName = faker.person.firstName().replace(/[^A-Za-z]/g, '');
  const lastName = faker.person.lastName().replace(/[^A-Za-z]/g, '');

  const registerUserData: RegisterUserModel = {
    userEmail: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
      provider: 'example.tet',
    }),
    userPassword: faker.internet.password({ prefix: '@#$%^&*(!', length: 15 }),
  };
  return registerUserData;
}
