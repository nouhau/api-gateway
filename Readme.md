# Nouhau API Gateway

#### API Gateway para serviços da Nouhau

### Este projeto usa
- Node
- Typescript
- Express

### Como rodar o projeto

1 - Clone os repositórios

- mapping-api
- user-api
- api-gateway


2 - Instale todas as dependências

---
    yarn install
---

3 - Levante o container docker

---
    cd mapping-api
    docker-compose up -d
---

4 - Execute todos os projetos

---
    yarn service run:dev

    cd ../mapping-api
    yarn service run:dev

    cd ../users-api
    yarn service run:dev
---

5 - Acesse a rota principal

<http://localhost:5000/>

6 - Aplique os padrões de código

---
    yarn lint:fix
---
