# Assessment_OneBossDemo

## Description
This project includes automated end-to-end testing scripts for the login functionality of the One Boss Application. The testing suite utilizes Cypress to ensure the smooth and secure functioning of the login process, verifying user authentication.

## Prerequisites
Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lakshmi-srinivasa/Assessment_OneBossDemo.git

2. Navigate to the project directory:
   ```bash
   cd Assessment_OneBossDemo
3. Install dependencies:
   ```bash
   npm install

## Running Test Locally
1. Open the Cypress test runner using the following command:

    ```bash
    npx cypress open
    ```

    1. In the Cypress test runner window, select "E2E testing" from the available projects.

    2. Choose your preferred browser for testing (e.g., Chrome) by clicking on the browser icon in the top-right corner.

    3. Once the browser is selected, click on "E2E Testing in [Your Selected Browser]" to initiate the test.

    4. After the Chrome browser opens, locate and click on the `login.cy.ts` file in the `cypress/integration` directory. This will execute the login test.

   Now, you should see the Cypress test runner executing your E2E test in the selected browser, and you can monitor the test results in the Cypress dashboard.


2.  Run tests in headless mode (for CI/CD):
    ```bash
    npx cypress run
    ```
    Now, the Cypress tests will be executed in headless mode, suitable for continuous integration (CI) or continuous deployment (CD) environments. You can review the test results directly from the command line.         