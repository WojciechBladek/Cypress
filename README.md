# Tests for skleptest.pl application

## GEN Shop Application

Repository: https://github.com/WojciechBladek/Cypress

Follow instructions in app README

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >16)

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup husky with: `npx husky install`
- prepare local env file: `.env`
- .env file variables example:

```
BASE_URL='https://skleptest.pl/'
USER_EMAIL='email.adress@test.com'
USER_PASSWORD='password'
USER_NAME= 'email.adress'
```

- go to base url and then create an account with your data and substitute it into the variables in .env

### Update framework

- cd /your/project/path
- install latest version of `npm install cypress --save-dev`
- check version `npx cypress version`

## Use

Run all tests:

```
npx cypress run
```

Open cypress:

```
npx cypress open
```

For more usage cases look in `package.json` scripts section.
