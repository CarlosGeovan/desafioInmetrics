import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que o usuário está na página de produtos', () => {
  cy.visit('https://www.automationexercise.com/products');
  cy.url().should('include', '/products');
});

When('o usuário adiciona o primeiro produto ao carrinho', () => {
  // Clica diretamente no botão visível do primeiro produto
  cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
});

When('confirma no modal clicando em "Continue Shopping"', () => {
  cy.get('#cartModal').should('be.visible');
  cy.contains('Continue Shopping').click();
});

When('acessa o carrinho', () => {
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
  cy.url().should('include', '/view_cart');
});

Then('o carrinho deve conter o produto adicionado', () => {
  cy.get('.cart_description').should('exist');
  cy.get('.cart_description').first().should('contain.text', 'Blue Top');
});