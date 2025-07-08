Feature: Adicionar produto ao carrinho

  Scenario: Adicionar um produto ao carrinho e verificar
    Given que o usuário está na página de produtos
    When o usuário adiciona o primeiro produto ao carrinho
    And confirma no modal clicando em "Continue Shopping"
    And acessa o carrinho
    Then o carrinho deve conter o produto adicionado