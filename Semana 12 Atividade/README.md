[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19548227&assignment_repo_type=AssignmentRepo)

# Trabalho Prático - Semana 12

Nesta atividade, você irá completar o projeto anterior permitindo cadastrar e alterar dados da entidade principal do do seu projeto a partir da estrutura criada na etapa anterior com o JSONServer. Para isso, crie uma **página de cadastro (cadastro_[ENTIDADE].html)**, que deve mostrar um formulário para cadastrar a entidade principal do projeto. OBS: Troque [ENTIDADE] pelo nome da sua entidade principal.

## Informações do trabalho

- Nome: Rafael Xavier Oliveira
- Matricula: 893046
- Proposta de projeto escolhida: Diretório de Receitas
- Breve descrição sobre seu projeto: Foi escolhido o projeto diretório de receitas com uma página web bem estruturada, feito com um layout em HTML usando Bootstrap, com uma aparência limpa e responsiva, além de um conjunto de seletores CSS personalizados para uma melhor formatação, e uma codificação em JavaScript para dinamização da página. Posteriormente, foi simulado um back-end utilizando um arquivo JSON com dados montados e, com uma nova implementação da dinâmica CRUD, permitindo a leitura, criação, atualização e exclusão de receitas, tornando, assim, um projeto mais funcional, prático e usual, permitindo uma melhor espansão e controle dos dados e até mesmo do projeto.

**Print do testes da API com Postman ou similar**

![alt text]({B56B93D7-2D81-4CD6-8DE5-043A0D35FEAD}.png)

![alt text]({AA6E1054-56C0-431A-A95C-C47B4E8D07FE}.png)

![alt text]({A552BBE0-7A93-4460-93CE-C7B50AD8235D}.png)

![alt text]({D7718BB2-15BD-46FF-9DD6-BD4E174F756E}.png)

**Print da aba NETWORK com requisições Fetch/XHR de POST**

![alt text]({CEF68498-F26D-439D-8A06-BD645B4399A2}.png)

## **Orientações Gerais**

Nesse projeto você vai encontrar a seguinte estrutura base:

* **Pasta db**
  Essa pasta contem um único arquivo: `db.json`. Esse arquivo serve de banco de dados simulado e nele você deve colocar as estruturas de dados que o seu projeto manipula.
  * **OBS**: Já incluímos a estrutura de usuários como exemplo e para que você possa utlizar no seu projeto. Se precisar, faça os ajustes necessários para seu projeto.
* **Pasta public**
  Nesta pasta você deve colocar todos os arquivos do seu site (front end). Aqui vão os arquivos HTML, CSS, JavaScript, imagens, vídeos e tudo o mais que precisar para a interface do usuário.
* **Arquivo README.md**
  Este arquivo em que são colocadas as informações de quem está desenvolvendo esse projeto e os registros solicitados no enunciado da tarefa.
* **Arquivo .gitignore**
  Configuração do que deve ser ignorado pelo git evitando que seja enviado para o servidor no GitHub.
* **Arquivo package.json**
  Considerado o manifesto do projeto ou arquivo de configuração. Nesle são incluídas as informações básicas sobre o projeto (descrição, versão, palavras-chave, licença, copyright), a lista de pacotes dos quais o projeto depende tanto para desenvolvimento quanto execução, uma lista de  do projeto, scripts entre outras opções.
  * **OBS**: Esse arquivo é criado assim que o projeto é iniciado por meio do comando `npm init`.
  * **OBS2**: Esse arquivo já traz a informação de necessidade do JSONServer.
* **Pasta node_modules**
  Local onde ficam os pacotes dos quais o projeto depende. Evite enviar essa pasta para o repositório remoto. Essa pasta é reconstruída toda vez que se executa o comando `npm install`.

**Ambiente de Desenvolvimento (IMPORTANTE)**

> A partir de agora, **NÃO utilizamos mais o LiveServer/FiveServer** durante o processo de desenvolvimento. O próprio JSONServer faz o papel de servidor.

Para iniciar o JSONServer e acessar os arquivos do seu site, siga os seguintes passos:

1. Abra a pasta do projeto dentro da sua IDE (por exemplo, Visual Studio Code)
2. Abra uma janela de teminal e certifique-se que a pasta do terminal é a pasta do projeto
3. Execute o comando `npm install`
   Isso vai reconstruir a pasta node_modules e instalar todos os pacotes necessários para o nosso ambiente de desenvolvimento (Ex: JSONServer).
4. Execute o comando `npm start`
   Isso vai executar o JSONServer e permitir que você consiga acessar o seu site no navegador.
5. Para testar o projeto:
   1. **Site Front End**: abra um navegador e acesse o seu site pela seguinte URL:
      [http://localhost:3000]()
   2. **Site Back End**: abra o navegador e acesse as informações da estrutura de usuários por meio da API REST do JSONServer a partir da seguinte URL:
      [http://localhost:3000/usuarios](http://localhost:3000/usuarios)

Ao criar suas estruturas de dados no arquivo db.json, você poderá obter estes dados através do endereço: http://localhost:3000/SUA_ESTRUTURA, tal qual como foi feito com a estrutura de usuários. **IMPORTANTE**: Ao editar o arquivo db.json, é necessário parar e reiniciar o JSONServer.

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar:

* na pasta **`public`,** para os arquivos de front end, mantendo os arquivos **`index.html`**, **`detalhes.html`**, **`styles.css`** e **`app.js`** com estes nomes, e
* na pasta **`db`**, com o arquivo `db.json`.

Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**
