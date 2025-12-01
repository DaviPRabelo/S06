# S206 - Qualidade de Software | Testes de API

Este projeto consiste na automação de testes de API utilizando **Postman**, como parte da avaliação da disciplina S206.

A API escolhida para os testes foi a **Balldontlie API** (Dados da NBA).

## Tecnologias Utilizadas

* [Postman](https://www.postman.com/) - Para desenvolvimento dos testes.
* [Node.js](https://nodejs.org/) - Ambiente de execução.
* [Newman](https://www.npmjs.com/package/newman) - Para execução via linha de comando.
* [Newman-reporter-htmlextra](https://www.npmjs.com/package/newman-reporter-htmlextra) - Para geração de relatórios HTML.

## Cenários de Teste

Foram desenvolvidos **6 cenários** (4 positivos e 2 negativos):

1.  **Listar Todos os Times (GET):** Valida se a API retorna a lista de 30 times da NBA.
2.  **Buscar Jogador Específico (GET):** Valida os dados de retorno do jogador "LeBron James" (ID 237).
3.  **Buscar Time Específico (GET):** Valida os dados do time "Chicago Bulls" (ID 5).
4.  **Listar Jogos (GET):** Valida se a lista de jogos é retornada corretamente.
5.  **Buscar Jogador Inexistente (Negativo):** Valida se a API retorna erro 404 ao buscar um ID inválido.
6.  **Deletar Jogador (Negativo):** Valida se a API bloqueia a exclusão de dados (Erro 404/405), garantindo a segurança dos dados públicos.

---

## Como Executar o Projeto

### Pré-requisitos
Para rodar a automação e gerar o relatório, você precisa ter instalado:
* Node.js
* Newman e o Reporter:
    ```bash
    npm install -g newman newman-reporter-htmlextra
    ```

### Configuração da API Key
A API **Balldontlie** exige uma chave gratuita.
1. Crie uma conta em [balldontlie.io](https://balldontlie.io/).
2. No arquivo da coleção (Postman), a variável de ambiente ou Header `Authorization` deve ser preenchida com sua chave.

### Executando com Newman (Relatório HTML)
1. Exporte a Collection do Postman como `.json`.
2. Abra o terminal na pasta do arquivo e execute:

```bash
newman run NomeDaSuaCollection.json -r htmlextra