Feature: DuckDuckgo

    Scenario: Digitando e utilizando ENTER para buscar
        Given acesso o site DuckDuckgo
        When inserir o nome Bitcoin no Campo de Busca e selecionar ícone LUPA
        Then é apresentado todos os resultados sobre o Bitcoin