import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When(/^Press 'Feel Lucky'$/, () => {
  cy.wait(2000);
});

Then(/^I am redirected to another domain$/, () => {
  cy.wait(2000);
});
