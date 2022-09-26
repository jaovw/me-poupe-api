# me-poupe-api :jigsaw:
### __SOBRE__ :paperclip:

Realizando um case tech utilizando TypeScript - NodeJs o qual é necessário a criação de 2 endpoints.

Desenvolvido e testado localmente através de requisições feitas com Postman.

Projeto em repositório git.

Respeitando os seguintes requisitos
  - clean clode
  - tratamento de erros
  - testes automatizados
  
  ## __CALCÚLO MÉDIA__ :heavy_division_sign:
  ### Descrição
  Endpoint para receber um body com 2 valores numéricos, para realizar a media matemática entre eles.
  
  ### __BODY__:
  Recebendo em formato JSON, valores "a" e "b" conforme exemplo
  
  ![image](https://user-images.githubusercontent.com/62576977/192172285-e699ab38-7ff5-4409-a3ce-21efad8b0e72.png)

  
  ## __CONSULTA CEP__ :world_map:
  ### Descrição
  Endpoint para a consulta de CEP passado através de parametro da requisição.
  
  Essa que por fim é checada em uma API de controle da __ViaCEP__ a qual foi utilizada para validar se há ou não CEP.
  
  
  ## __DOCKER__ :whale2:
  ```
   docker-compose up
  ```
  ## __DEPLOY__ :rocket:
  Dependencias
  ```
   yarn add 
  ```
  Build
  ```
   yarn tsc
  ```
  Script pre definido contido em __package.json__
  ```
   yarn dev
  ```
  
  ## __TESTES__
