# ES46A_Exercicio1

Arquitetura em Camadas

Versão node v16.20.0

npm install para instalar os pacotes

npm run start para iniciar a aplicação

Documentação

na raiz está a camada de visualização, index.html (home), calculo-de-medias(persistencia dos dados) e exibir-listas(recuperação dos dados);

na raiz também está o estilo da aplicação "style.css";

/src/firebase/persistencia.js contem a instanciação do banco;

/src/JS/index.js contem a importação da instancia do banco e envio da persistencia;

/src/JS/buscarLista contem a importção da instancia do banco e recuperação dos dados persistidos;

