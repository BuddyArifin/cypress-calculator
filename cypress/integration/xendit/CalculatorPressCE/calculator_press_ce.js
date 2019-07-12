import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import CalculatorPage from "../../../pages/calculator-page";

const url = "https://www.online-calculator.com/full-screen-calculator/"

Given('I open Calculator page', () => {
  cy.visit(url);
});

And('I see calculator in the title', () => {
  cy.title().should("include", "Full Screen Calculator - Online Calculator");
});

And("I want to do division {int} with {int}", (numOne, numTwo) => {
  CalculatorPage.division(numOne, numTwo);
});

And("I press CE button", () => {
  CalculatorPage.pressClear();
});

Then("I can see the result is result", () => {
  cy.matchImageSnapshot();
});