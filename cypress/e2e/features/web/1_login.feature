Feature: Login no site

  Scenario: Login com sucesso
    Given que o usuário acessa a página de login
    When o usuário preenche o e-mail "teste2025@teste.com.br" e a senha "teste"
    And clica no botão de login
    Then o login deve ser realizado com sucesso