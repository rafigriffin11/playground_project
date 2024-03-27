Cypress Alerts Test Suite

This test suite contains Cypress tests for interacting with various types of alerts on the DemoQA website. The tests cover handling basic alerts, timer alerts, confirm alerts, and prompt alerts.

Setup

To run these tests, ensure you have Node.js and npm installed on your machine.

Clone this repository to your local machine:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd <project-directory>
Install dependencies:
Copy code
npm install
Run Cypress tests:
arduino
Copy code
npm run cypress:open
This will open the Cypress Test Runner, where you can select the alerts.spec.js test file to run the tests.

Custom Commands

cy.ClickMe(buttonId)
This custom command clicks on an alert button identified by its ID. It checks if the button is clickable and then clicks on it. If the button is not clickable, it logs a message to the Cypress console.


Test Cases
Main Page Display
This test case verifies that the main page is displayed correctly by checking the presence of the main heading.

Basic Alert Navigation
This test case navigates to the Basic Alert section, clicks on the Basic Alert button, and validates the alert message displayed.

Timer Alert Navigation
This test case navigates to the Timer Alert section, clicks on the Timer Alert button, and validates the alert message displayed after a delay.

Confirm Alert Navigation and Confirmation
This test case navigates to the Confirm Alert section, clicks on the Confirm Alert button, and validates the confirmation message displayed. It also confirms the action by clicking the OK button.

Confirm Alert Navigation and Cancelation
This test case navigates to the Confirm Alert section, clicks on the Confirm Alert button, and simulates canceling the action. It validates the cancelation message displayed.

Prompt Alert Handling
This test case handles interactions with the Prompt Alert section by stubbing the prompt method, simulating user input, and validating the prompt alert functionality.
