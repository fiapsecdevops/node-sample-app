# Container rodando node-js

Uma app simples em node usando [Express 4](http://expressjs.com/).

## Fiap - SecDevops
Teste de webhook básico

## Build da Imagem:

Crie um Dockerfile com as especificacoes abaixo:

```sh
FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
```

Em seguida faça o build de seu novo container_

```sh
docker build -t mynode-app .
```



## Executando o container:

Por padrao ao executar seu container ele utiliza a porta [localhost:5000](http://localhost:5000/) do node, dessa forma para rodar seu container alterando a porta utilize a propriedade PORT, um recursos da propria linguagem node:

```sh
docker run -d -p 8080:8080 -e PORT=8080 mynode-app
```
