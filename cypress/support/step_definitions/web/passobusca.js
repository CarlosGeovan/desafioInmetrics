import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que o usuário está na página principal', () => {
  cy.visit('https://www.automationexercise.com');
});

Given('acessa a seção de produtos', () => {
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
  cy.url().should('include', '/products');
});

When('o usuário digita {string} no campo de busca', (produto) => {
  cy.get('#search_product').clear().type(produto);
});

When('clica no botão de busca', () => {
  cy.get('#submit_search').click();
});

Then('os resultados da busca devem conter produtos relacionados a {string}', (produto) => {
  cy.get('.features_items .productinfo p, .features_items .productinfo h2')
    .should('exist')
    .then(($els) => {
      const textos = $els.toArray().map(el => el.innerText.toLowerCase());
      const prod = produto.toLowerCase();
      const temProduto = textos.some(text => text.includes(prod));
      expect(temProduto, `Esperava encontrar produto relacionado a "${produto}"`).to.be.true;
    });
});