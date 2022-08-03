# Negociacoes - TypeScript

Este projeto foi criado ao longo dos cursos da formação em TypeScript da plataforma Alura.

## Objetivo

Se tratando de um curso, o único objetivo da aplicação foi realmente aprender TypeScript e como esse _superset_ poderia levar o JavaScript para um outro patamar.

## Como rodar

Para testar a funcionalidade básica da aplicação, execute num terminal na raiz do projeto:

        > npm install
        > npm start

O comando "start" irá rodar simultaneamente o compilador _tsc_ em modo _watch_ e o _lite-server_. A aplicação vai rodar em http://localhost:3000/dist/index.html. É importante ressaltar que, sem integração com a API, o botão "Importar" não irá funcionar.

Para integrar com a API e testar a aplicação por completo, abra um segundo terminal na raiz do projeto e execute:

        > cd servidor-api
        > npm install
        > npm start

O servidor irá escutar em http://localhost:8080. A API é bem simples, foi criada somente para testar esse projeto.

## Sobre esse projeto

A aplicação foi construída praticamente com TypeScript e um pouco de JavaScript puro. Aprendi bastante e "turbinei" meu JavaScript com muitos novos recursos, por exemplo:

- Modificadores (private, public, abstract, readonly, static)
- Tipagem estática
- Generics
- Herança, interfaces e classes abstratas
- Decorators
