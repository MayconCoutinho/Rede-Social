<p align="center">
  <img src="https://user-images.githubusercontent.com/60453269/216188774-9349330a-7e20-4039-ad76-ece09f24096d.png" alt="Logo" width="150" height="150" />
</p>

<h1 align="center"> Social </h1>

<p align="center">
  <b> Um projeto fullstack de uma rede social completa e funcional </b></br>
  <sub> Este projeto tem o objetivo de pôr todas minhas habilidades à prova, o projeto foi desenvolvido do "zero", uma grade parte do projeto usei código de terceiros como bibliotecas e tecnologias, no entanto todo o código que foi escrito, foi totalmente desenvolvido por mim.
  <sub>
</p>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br /> 

### 🚧 PROJETO EM ANDAMENTO 🚧

<br /> 


<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀Esse é um projeto fullStack construído totalmente do zero. O objetivo desse projeto é por todas minhas habilidades em prática,
  a ideia de modo geral é uma rede social parecida com o linkedin e o facebook. O projeto tem 3 stacks principais React.js no frontend, 
  Node.js no Backend e o FireBase no Banco de dados.***

<br/>

<a id="Resultados"></a>
## 🚀 Resultados 
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/> 

## Front-end

</summary>

### 🤳🏻 Mobile

Login | Registro | Feed | Menu |
|---|---|---|---|
![HomePagePhone](https://user-images.githubusercontent.com/60453269/216195912-079d82a0-0ab7-49f3-aa71-414a60b2f767.png) | ![DetalhesPhone](https://user-images.githubusercontent.com/60453269/216195909-5373005a-2e93-488f-959d-619260fc76a4.png)| ![DetalhesPhone](https://user-images.githubusercontent.com/60453269/216195906-bb69cd37-12bb-4deb-aa7f-bbe9c3873bef.png)| ![DetalhesPhone](https://user-images.githubusercontent.com/60453269/216195904-c6210dc9-2323-474b-8d70-8cda655f1ccc.png)
  
Modal Post | Menu Hamburger | Feed |
|---|---|---|
![HomePagePhone](https://user-images.githubusercontent.com/60453269/216195896-b2fb1ee6-c3c8-400c-9e2c-5657b6637a63.png) | ![DetalhesPhone](https://user-images.githubusercontent.com/60453269/216195901-5418c8fd-13c2-44ad-9b4c-cc99a3dd59f7.png)| ![DetalhesPhone](https://user-images.githubusercontent.com/60453269/216195917-1a3b9456-672b-4077-8ed1-df528ce84205.png)
  
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


### 💻 Desktop 
  
 Login | Registro | Feed |
|---|---|---|
![HomePage](https://user-images.githubusercontent.com/60453269/216196816-732e76cb-ad41-499f-80fd-2cfa04f52ad5.png) | ![Detalhes](https://user-images.githubusercontent.com/60453269/216196824-69b5b6d2-cce1-4b08-9b03-ff5b5fcb8a12.png) | ![Detalhes](https://user-images.githubusercontent.com/60453269/216196822-5008a618-bf21-4bb3-8c0e-579131d771fa.png)
    
 Modal Post | Feed outros | Menu Hamburger |
|---|---|---|
![HomePage](https://user-images.githubusercontent.com/60453269/216198241-b8096789-5ac3-44c9-80f0-1b476f27b7ed.png) | ![Detalhes](https://user-images.githubusercontent.com/60453269/216196820-933c5b3a-63b5-4373-abae-1e424969931f.png) | ![Detalhes](https://user-images.githubusercontent.com/60453269/216196818-2db64773-92e4-458d-80fc-70712bc1d7bd.png)
  

<br/>

## Back-end

<br/>

  
### 🎯 PEGAR TODOS OS PRODUTOS CADASTRADO NO BANCO DE DADOS.
  
### ```GET``` 
```URL
 http://localhost:3003/products
```
  
```JSON
  {
    "id": "e5a9a1af-c23e-4e10-98fd-ae914f7f6424",
    "name": "macbook",
    "category": "laptop",
    "status": "ACTIVE",
    "quantity": 10,
    "created_at": 0,
    "updated_at": 0,
    "deleted_at": 0
  }
```
  
<br /> 
  

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...


## `📖 Scripts` 

```JSON
  "scripts": {
    "start": "node ./build/src/index.js",
    "build": "tsc",
    "dev": "ts-node-dev ./src/index.ts",
    "migrations": "tsc && node ./build/src/database/migrations/Migrations.js",
    "test": "jest"
  }

```
  

## `📖 Dependencies` 

```JSON
  "dependencies": {
        "bcryptjs": "^2.4.3",
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "firebase": "^9.15.0",
        "firebase-admin": "^11.5.0",
        "jsonwebtoken": "^9.0.0",
        "multer": "^1.4.5-lts.1",
        "uuid": "^9.0.0"
      }

```

<br /> 

## `📖 devDependencies` 


```JSON
      "devDependencies": {
        "@types/bcryptjs": "^2.4.2",
        "@types/cors": "^2.8.13",
        "@types/express": "^4.17.15",
        "@types/jest": "^29.2.6",
        "@types/jsonwebtoken": "^9.0.0",
        "@types/multer": "^1.4.7",
        "@types/node": "^18.11.18",
        "@types/uuid": "^9.0.0",
        "jest": "^29.4.0",
        "ts-jest": "^29.0.5",
        "ts-node-dev": "^2.0.0",
        "typescript": "^4.9.4"
      }

```


<a id="Ideias"></a>
## 💡 Possíveis Melhoras
> Possíveis melhorias no código e no projeto, caso queira voltar e melhorá lo.

<br /> 

- [ ] ***- Testa todo o código.*** 


<br /> 

<a id="Creditos"></a>
## 🏆 Créditos

<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|




</div> 

  
