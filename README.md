# Sistema de Gerenciamento de Clientes

## Intro

Projeto desenvolvido para o teste de Desenvolvedor Facilita Jurídico.<br />
Este é um monorepo que contém dois projetos: uma API desenvolvida em NodeJS e o outro projeto é o frontend desenvolvido em ReactJS.<br />O sistema é basicamente um CRUD de clientes e também uma função para calcular rota com base em coordenadas.

---

## Considerações

Optei por desenvolver a API sem o uso de frameworks (Ex.: AdonisJS/NestJS). Da mesma forma, ela não possui uma camada de autorização, já que o enunciado não descrevia nada desse tipo. Apesar de ser um projeto pequeno, optei por uma arquitetura que seja fácil de escalar para 'futuras' funcionalidades.

---

## Visualização

![Captura de tela 2024-02-03 160909](https://github.com/ThompsonMss/microservice-html-to-pdf-with-sqs/assets/30129295/97d70dd3-b9b7-456d-ae39-ec40cf22a47b)

## Instalação

<br />

### Uso com Docker

Siga os comandos abaixo para executar essa aplicação em sua máquina.

> **Atenção!** É necessário que o seu ambiente de desenvolvimento esteja configurado para trabalhar docker e docker-compose. Caso não tenha os mesmos configurados, você precisará instalar esse projeto manualmente. [Veja o Uso Manualmente aqui!](#uso-manualmente)

#

```bash
# Clonando o repositório da aplicação.

git clone https://github.com/ThompsonMss/gerenciamento-clientes-facilita-juridico.git
```

```bash
# Entrando na pasta da aplicação.

cd /gerenciamento-clientes-facilita-juridico/
```

```bash
# Comando para iniciar o container da aplicação com docker-compose.

docker-compose up -d
```

<br />

> Esse comando subiu os containers necessários para rodar a aplicação, são eles: Banco de Dados (PostgresSQL), API (NodeJS c/ Express) e Frontend (ReactJS c/ Vite)

### Pronto! Abra em seu navegador o link abaixo para acessar a apliacação online.

[Link Gestão de Clientes - http://localhost:5173/](http://localhost:5173/)

<br />

# Uso Manualmente

### Requisitos da aplicação

A estrutura do sistema tem alguns requisitos, são eles:

- NodeJS >= 16
- Postgres 13

### Faça os seguintes passos:

```bash
# Clonando o repositório da aplicação.

git clone https://github.com/ThompsonMss/gerenciamento-clientes-facilita-juridico.git
```

```bash
# Entrando na pasta da aplicação.

cd /gerenciamento-clientes-facilita-juridico/
```

>1º - Configure um banco de dados usando PostgresSQL.

>2º - Crie um database com o nome 'facilitajuridico'

>3º - Copie o SQL do arquivo 'init.sql' que está na raiz do projeto.

>4º - Siga os passos a seguir.

```bash
# Entrando na pasta da API.

cd /api

# Rode o comando abaixo para instalar as dependências
npm i

# Altera o arquivo .env da API.
PORT=3333
NODE_ENV=development

DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=facilitajuridico
DB_PASSWORD=root
DB_PORT=5432

# Execute o projeto.
npm run start:dev
```

> Abra outro terminal

```bash
# Entrando na pasta do Frontend.

cd /frontend

# Rode o comando abaixo para instalar as dependências
npm i

# Altera o arquivo .env da API.
VITE_API=http://localhost:3333

# Execute o projeto.
npm run dev
```
### Pronto! Abra em seu navegador o link abaixo para acessar a apliacação online.

[Link Gestão de Clientes - http://localhost:5173/](http://localhost:5173/)

<br>
 
## Testes (API)

```bash

# Acesse a pasta da API
cd /api

# Execute o comando
npm run test

```

<br>
 
## Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/thompson-silva)

<br>

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
