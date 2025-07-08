import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let resposta;

Given("que faço uma requisição GET para a API do Trello", () => {
  cy.request("https://api.trello.com/1/actions/592f11060f95a3d3d46a987a").then((res) => {
    resposta = res;
  });
});

Then("exibo o campo name da estrutura list", () => {
  const nome = resposta.body.data?.list?.name;
  cy.log("Nome da lista:", nome);
  expect(nome).to.be.a("string");
});

Then("o status code da resposta deve ser 200", () => {
  expect(resposta.status).to.eq(200);
});