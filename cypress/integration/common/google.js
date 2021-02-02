import { Given, When } from 'cypress-cucumber-preprocessor/steps';


Given(/^I'm at Google$/, () => {
  cy.wait(2000);
});

When(/^I type search word 'github'$/, () => {
  cy.wait(2000);
});

