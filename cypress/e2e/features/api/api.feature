Feature: Teste da API do Trello

  Scenario: Exibir nome da lista e validar status da resposta
    Given que faço uma requisição GET para a API do Trello
    Then exibo o campo name da estrutura list
    And o status code da resposta deve ser 200