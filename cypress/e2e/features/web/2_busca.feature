Feature: Busca de produtos

  Scenario: Buscar por um produto
    Given que o usuário está na página principal
    And acessa a seção de produtos
    When o usuário digita "Blue Top" no campo de busca
    And clica no botão de busca
    Then os resultados da busca devem conter produtos relacionados a "Blue Top"