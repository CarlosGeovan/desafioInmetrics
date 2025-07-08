import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário acessa a página de login", () => {
  cy.visit("https://www.automationexercise.com/login");
});

When("o usuário preenche o e-mail {string} e a senha {string}", (email, senha) => {
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(senha);
});

When("clica no botão de login", () => {
  cy.get('button[data-qa="login-button"]').click();
});

Then("o login deve ser realizado com sucesso", () => {
  cy.contains("Logged in as").should("be.visible");
});