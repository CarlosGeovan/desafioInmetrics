# Projeto de Automação - Desafio Cypress + Cucumber

Este projeto contém testes automatizados usando Cypress e Cucumber (BDD) para validar funcionalidades web e API conforme solicitado no desafio.

---

## Tecnologias usadas

- **JavaScript**
- **Cypress** (framework de testes E2E)
- **Cucumber (BDD)** com o pacote `@badeball/cypress-cucumber-preprocessor`
- **Esbuild** para pré-processamento dos arquivos `.feature`

---

## Estrutura do Projeto

cypress/
├── e2e/
│ ├── features/
│ │ ├── web/ # Cenários da aplicação web
│ │ │ ├── login.feature
│ │ │ ├── busca.feature
│ │ │ └── carrinho.feature
│ │ └── api/ # Cenários de testes de API
│ │ └── api.feature
├── support/
│ ├── e2e.js # Configuração global do Cypress e imports
│ └── step_definitions/ # Implementação dos steps do Cucumber
│ ├── web/
│ │ ├── login.steps.js
│ │ ├── passobusca.js
│ │ └── passocarrinho.js
│ └── api/
│ └── api.steps.js
cypress.config.js # Configurações do Cypress e plugins
package.json # Dependências e scripts do projeto
README.md # Documentação do projeto

## Requisitos para rodar

- Node.js (versão 16 ou superior recomendada)
- npm (gerenciador de pacotes do Node.js)

## Como instalar

1. Clone este repositório:

git clone <URL-do-repositorio>
cd inmetrics-automation

## Instale as dependências do projeto:

npm install

## Como executar os testes

Abrir a interface do Cypress

npx cypress open
Depois, selecione o teste desejado para rodar via GUI.

## Executar todos os testes no terminal

npx cypress run

## Detalhes dos testes implementados

Testes Web (automationexercise.com)

Login: Validação do login com usuário e senha de teste.
Busca: Pesquisa por produto e validação do resultado.
Adicionar ao carrinho: Inclusão de produto no carrinho e validação.
Validação do carrinho: Confirmação dos produtos na tela de pagamento.

Testes API

Envio de requisição GET para a API do Trello:
https://api.trello.com/1/actions/592f11060f95a3d3d46a987a
Validação do status code 200.
Extração e exibição do campo name dentro da estrutura list na resposta.

## Observações

Contato
Desenvolvido por: Carlos Geovan
Email: geovann@gmail.com
