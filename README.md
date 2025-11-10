## S06 - Qualidade de Software

Repositório dedicado as atividades do laboratório da matéria

### Atividade 3
## Testes com Cypress

O site escolhido para a automação foi o https://www.automationexercise.com/


## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução.
* **Cypress:** Framework principal para os testes E2E.
* **cypress-mochawesome-reporter:** Plugin para geração de relatórios de teste em HTML.



## Cenários de Teste Implementados

O projeto atende aos requisitos do exercício, com 6 casos de teste no total, incluindo testes positivos e negativos:

1.  **Positivo:** Deve ser capaz de registrar um novo usuário com sucesso.
2.  **Positivo:** Deve realizar um delete de usuário após o criar usuário.
3.  **Positivo:** Deve fazer logout 
4.  **Positivo:** Deve ser capaz de realizar um login corretamente
5.  **Negativo:** Deve falhar ao realizar o login
6.  **Negativo:** Deve falhar ao tentar criar um usuário


## Como Executar o Projeto

Siga os passos abaixo para clonar, instalar as dependências e executar os testes.

### Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado em sua máquina.

# Instale o cypress-mochawesome-reporter

npm install mochawesome mochawesome-merge mochawesome-report-generator

#Caso não funcione use

npm install --save-dev cypress-mochawesome-reporter

# Adicione em seu cypress.config.js

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

  },
});

# No arquivo E2E adicione

import 'cypress-mochawesome-reporter/register'

# Faça o clone dos testes

git clone https://github.com/DaviPRabelo/S06.git

# No terminal bash digite o comando

./node_modules/.bin/cypress run --spec 'caminho do arquivo'


# Dentro da pasta cypress/reports, rode o index.html para analisar o relatório de testes feito