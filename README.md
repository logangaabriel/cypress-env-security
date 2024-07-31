# Cypress Test: Secure Handling of `cypress.env.json`

This repository contains an example of a Cypress script demonstrating how to manage sensitive data using the `cypress.env.json` file.

## Objective

The objective of this test is to illustrate how to protect sensitive information, such as login credentials, when using Cypress. We use the `cypress.env.json` file to store confidential data, ensuring it is not exposed in the source code or test logs.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress) (version 13.13.01 or higher)

## Installation

1. Clone this repository:

    ```sh
    git clone https://github.com/logangaabriel/cypress-env-security
    cd cypress-env-security
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create the `cypress.env.json` file in the root of the project and add your login credentials:

    ```json
    {
      "USER_EMAIL": "your-email@example.com",
      "USER_PASSWORD": "your-secure-password"
    }
    ```

    > **Note:** Make sure to add `cypress.env.json` to your `.gitignore` file to prevent it from being versioned in your source control.

## Project Structure

```
cypress-secure-handling/
│
├── cypress/
│   ├── e2e/
│   │   └── cypress-env-guard.cy.js
│   ├── fixtures/
│   ├── support/
├── cypress.env.json
├── cypress.config.js
├── package.json
├── .gitignore
└── README.md
```

## Test Script

The test script is located in `cypress/e2e/cypress-env-guard.cy.js` and is responsible for securely logging in using the credentials stored in `cypress.env.json`.

```javascript
describe('Secure handling of cypress.env.json', () => {
  it('Managing sensitive data in cypress.env.json', () => {
    cy.visit('login')  
    cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'))
    const password = Cypress.env('USER_PASSWORD')
    cy.get('input[type="password"]').type(password, {log: false})
    cy.get('button[type="submit"]').click()

    cy.contains('.alert', 'Welcome, Env!')
      .should('be.visible')
  })
})
```

### Explanation

- `cy.visit('login')`: Navigates to the login page.
- `cy.get('input[type="email"]').type(Cypress.env('USER_EMAIL'))`: Enters the user email obtained from `cypress.env.json`.
- `const password = Cypress.env('USER_PASSWORD')`: Stores the user password in a variable.
- `cy.get('input[type="password"]').type(password, { log: false })`: Enters the user password but hides the value from Cypress logs.
- `cy.get('button[type="submit"]').click()`: Clicks the form submission button.
- `cy.contains('.alert', 'Welcome, Env!').should('be.visible')`: Verifies that the welcome message is visible.

## Running the Tests

To run the tests, use the following command:

```sh
npx cypress open
```

This will open the Cypress graphical interface where you can select and run the `cypress-env-guard.cy.js` test.

## Conclusion

This example demonstrates a best practice for handling sensitive data in automated tests with Cypress. By using the `cypress.env.json` file, you can keep your credentials secure and avoid accidental exposure in your source code or logs.

For more information, refer to the [official Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress).

---

## Connect with Me

- [Medium](https://medium.com/@gabriellogan.0804/guardando-segredos-com-cypress-46ecce152db1)
- [YouTube](https://www.youtube.com/@gaabriellogan)
- [LinkedIn](https://www.linkedin.com/in/gabriel-logan/)
