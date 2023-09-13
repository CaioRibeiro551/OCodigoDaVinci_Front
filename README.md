<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">Portuguese</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>

![luk4x-repo-status](https://img.shields.io/badge/status-developing-lightgrey?style=for-the-badge&logo=headspace&logoColor=yellow&color=lightgrey)
![luk4x-repo-license](https://img.shields.io/github/license/Luk4x/apple-store?style=for-the-badge&logo=unlicense&logoColor=lightgrey)
## Plataforma de cobrança 

<br>
<p align="center">
  <a href="#-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-etapas">Etapas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-páginas-e-rotas">Páginas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demais-componentes">Componentes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>
<br>




## 🚀 Tecnologias Utilizadas

> Abaixo estão as 8 tecnologias utilizadas no desenvolvimento do projeto, e o motivo de usá-las.

<table align="center">
  <tr>
     <td align="center">
      <a href="https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-O-B%C3%A1sico-do-Git">
        <img src="https://skillicons.dev/icons?i=git" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>GIT</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Facilidade no controle de versões e trabalho em equipe.</i>
        </details>
      </h6>
    </td>
     <td align="center">
      <a href="https://mui.com/material-ui/getting-started/">
        <img src="https://skillicons.dev/icons?i=materialui" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>MaterialUI</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Agilidade na construção de designs limpos.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://www.postgresql.org/docs/">
        <img src="https://skillicons.dev/icons?i=postgres" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>postgres</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Confiabilidade, desempenho e durabilidade.</i>
        </details>
      </h6>
    </td>
     <td align="center">
      <a href="https://docs.npmjs.com/">
        <img src="https://skillicons.dev/icons?i=nodejs" width="65px" alt="NodeJs icon"/><br>
        <sub>
          <b>
            <pre>Node</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Como ele usamos o javascript no servidor.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/">
        <img src="https://skillicons.dev/icons?i=js" width="65px" alt="Javascript icon"/><br>
        <sub>
          <b>
            <pre>Javascript</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Ele é a base do React.js.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/">
        <img src="https://skillicons.dev/icons?i=css" width="65px" alt="CSS3 icon"/><br>
        <sub>
          <b>
            <pre>CSS3</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Usado para deixar as páginas bonitas.</i>
        </details>
      </h6>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/">
        <img src="https://skillicons.dev/icons?i=html" width="65px" alt="HTML5 icon"/><br>
        <sub>
          <b>
            <pre>HTML5</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Usado para estruturar as páginas.</i>
        </details>
      </h6>
    </td>
     <td align="center">
      <a href="https://pt-br.reactjs.org/">
        <img src="https://skillicons.dev/icons?i=react" width="65px" alt="React icon"/><br>
        <sub>
          <b>
            <pre>ReactJS</pre>
          </b>
        </sub>
      </a>
      <h6>
        <details>
          <summary>Motivo</summary>
          <br/>
          <i>Performace e agilidade na construção das páginas</i>
        </details>
      </h6>
    </td>
  </tr>
</table>

## 🗓️ Etapas
<details open="">
<summary><h1> 1ª Sprint</h1></summary>
<br>

<details>
<summary><b>[Usuário] Cadastro do usuário</b></summary>
<br>
<h3 >Nessa etapa, o usuário realizará o cadastro para obter acesso ao sistema</h3>
<hr>
    <ul>
        <li>
            <h4>Campos necessários para o cadastro inicial:</h4>
            <ul>
                <li>Nome do usuário (obrigatório)</li>
                <li>Email (obrigatório)</li>
                <li>Senha (obrigatório)</li>
            </ul>
        </li>
        <li>
            <h4>Serão informadas mensagens de erro em casos de:</h4>
            <ul>
                <li>Campos obrigatórios em branco</li>
                <li>E-mail informado já existir cadastrado</li>
            </ul>
        </li>
        <li>
            <h4>Será informada mensagem de sucesso:</h4>
            <ul>
                <li>Após realizado o cadastro com sucesso o usuário receberá uma mensagem de confirmação e um botão para ser redirecionado para a página de Login.</li>
            </ul>
        </li>
    </ul>
</details>

<details>
<summary><b>[Usuário] Login do usuário</b></summary>
<h3>Nessa etapa, o usuário será capaz de realizar login no Dashboard, afim de acessar o sistema.</h3>
<hr>
<ul>
    <li>
        <h4>Campos obrigatórios para o login:</h4>
        <ul dir="auto">
            <li>E-mail</li>
            <li>Senha</li>
        </ul>
    </li>
    <li>
        <h4>Será informadas mensagens de erro em casos de:</h4>
        <ul>
            <li>Campos obrigatórios em branco</li>
            <li>E-mail não existe no cadastro</li>
            <li>Senha incorreta para o e-mail</li>
        </ul>
    </li>
    <li>
        <h4>Após realização de login com sucesso:</h4>
        <ul>
            <li>Criação de token de autenticação após validação dos dados (credenciais) de acesso (e-mail e senha).</li>
            <li>
            Será ser retornado ao navegador o token de autenticação de forma que possa ser utilizado em outras funcionalidades que exigem autenticação. O usuário deverá ser redirecionado para a home do sistema
            </li>
        </ul>
    </li>
</ul>
</details>

<details>
<summary><b>[Dashboard] Home e Menu</b></summary>
<h3>Nessa seção do sistema, será exibida ao usúario uma tela inicial, afim de poder navegar através do menu.</h3>
<hr>
    <ul>
        <li>
        <h4 dir="auto">Critérios de aceite</h4>
            <ul>
                <li>Apenas usuários autenticados deverão conseguir acessar esta página</li>
            </ul>
        </li>
        <li>
            <h4 dir="auto">Esta tela tem uma imagem padrão de usuário e o primeiro nome do usuário no canto superior direito, que ao clicar, abrirá um menu com dois botões:</h4>
            <ul dir="auto">
                <li>O primeiro é o "Editar", que abre um modal de atualização do cadastro do usuário logado.</li>
                <li>O segundo é o botão "Sair", que desloga o usuário do sistema</li>
            </ul>
            </li>
        <li>
            <h4 dir="auto">Do lado esquerdo, há um Menu lateral contendo os links que permitirá o usuário navegar pelos módulos do sistema:</h4>
            <ul dir="auto">
                <li>Home</li>
                <li>Clientes</li>
                <li>Cobranças</li>
            </ul>
        </li>
        <li>
            <h4 dir="auto">Esta tela tem 8 cards com as seguintes informações:</h4>
            <ul dir="auto">
                <h5 dir="auto">Resumo do Valor Total das Cobranças</h5>
                <li>
                    <p dir="auto">Pagas</p>
                </li>
                <li>
                    <p dir="auto">Vencidas</p>
                </li>
                <li>
                    <p dir="auto">Previstas</p>
                </li>
                <h5 dir="auto">Prévia de categorioas</h5>
                <li>
                    <p dir="auto">Cobranças Vencidas</p>
                </li>
                <li>
                    <p dir="auto">Cobranças Previstas</p>
                </li>
                <li>
                    <p dir="auto">Cobranças Pagas</p>
                </li>
                <li>
                    <p dir="auto">Clientes Inadimplentes</p>
                </li>
                <li>
                    <p dir="auto">Clientes Em dia</p>
                </li>
            </ul>
        </li>
    </ul>
</details>

<details>
<summary><b>[Usuário] Edição do usuário logado</b></summary>
<h3 tabindex="-1" dir="auto">Quando logado, o usuário poderá editar seus dados no sistema.</h3>
<hr/>
    <ul dir="auto">
        <li>
            <h4 dir="auto">Critérios de aceite</h4>
            <ul dir="auto">
                <li>Para acessar este formulário de cadastro é exigido autenticação.</li>
                <li>Através de um clique no perfil da Dashboard serão abertos dois botões:
                <ul dir="auto">
                    <li>Editar</li>
                    <li>Sair</li>
                </ul>
                </li>
                <li>Ao clicar em "Editar" o formulário de edição dos dados do usuário será aberto.</li>
                <li>Ao abrir o formulário, os dados do usuário logado serão carregados nos respectivos campos</li>
           </ul>
        <li>
            <h4 dir="auto">O usuário poderá atualizar os respectivos dados a seguir:</h4>
            <ul dir="auto">
                <li>Nome do usuário (obrigatório)</li>
                <li>E-mail (obrigatório)</li>
                <li>Senha (obrigatório - apenas se for alterar a senha)</li>
                <li>CPF</li>
                <li>Telefone</li>
            </ul>
        <li>
            <h4 dir="auto">Serão informadas mensagens de erro em casos de:</h4>
            <ul dir="auto">
                <li>Campos obrigatórios passados em branco</li>
                <li>E-mail informado for diferente do usuário logado e já existir cadastrado para outro usuário</li>
            </ul>
        </li>
        <li>
        <h4 dir="auto">Após realizado a atualização com sucesso o usuário receberá uma mensagem de confirmação</h4>
        </li>
    </ul>
</details>

<details>
<summary><b>[Cliente] Cadastro do cliente</b></summary>
<h3 tabindex="-1" dir="auto">Nessa seção o usário poderá cadastrar clientes, afim de acessar suas informações no futuro.</h3>
<hr />
<ul dir="auto">
    <li>
        <h4 dir="auto">Critérios de aceite</h4>
        <ul dir="auto">
            <li>
            <p dir="auto">Para acessar este formulário de cadastro deverá ser exigida autenticação</p>
            </li>
            <li>
            <p dir="auto">Campos necessários para o cadastro (<b>*</b> obrigatórios):</p>
                <ul dir="auto">
                    <li>Nome do usuário (<b>*</b>)</li>
                    <li>Email (<b>*</b>)</li>
                    <li>Cpf (<b>*</b>)</li>
                    <li>Telefone (<b>*</b>)</li>
                    <li>Cep</li>
                    <li>Logradouro</li>
                    <li>Complemento</li>
                    <li>Bairro</li>
                    <li>Cidade</li>
                    <li>Estado</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <h4 dir="auto">Opcionalmente, poderá ter a busca do endereço ao digitar o CEP utilizando a api do ViaCEP</h4>
    </li>
    <li>
        <h4 dir="auto">Será informadas mensagens de erro em casos de:</h4>
        <ul dir="auto">
            <li>Campos obrigatórios em branco</li>
            <li>E-mail informado já existir cadastrado</li>
        </ul>
    <li>
        <h4 dir="auto">Após realizado a atualização com sucesso o usuário receberá uma mensagem de confirmação</h4>
    </li>
</ul>
</details>

<details>
<summary><b>[Dashboard] Configuração do Deploy</b></summary>
<h3 tabindex="-1" dir="auto">Na posição de usuário do sistema, devo ser capaz de acessar o sistema através da internet, afim de usar o sistema em qualquer dispositivo com acesso a internet.</h3>
<hr>
<ul dir="auto">
    <li>
        <p dir="auto"><b>Critérios de aceite</b></p>
        <ul dir="auto">
            <li>O frontend poderá ser hospedado na <b>Netlify</b></li>
            <li>O backend e banco de dados poderá ser hospedado na <b>Cyclic</b></li>
            <li>O frontend hospedado deverá ser <b>integrado</b> ao backend também hospedado</li>
        </ul>
    </li>
</ul>
</details>



## 📝 Sobre
##### Este projeto consiste em sistema de gerenciamento de cobranças.


### 📄 Páginas e Rotas

#### A aplicação tem um total de 3 componentes de página, sendo eles:

  - `pages/index`: Essa é a Home da aplicação, onde o usuário pode efetuar o LogIn/LogOut, e adicionar produtos ao carrinho. Os produtos são buscados da base de dados utilizando o conceito de **SSR**;
  - `pages/checkout`: Essa é a página de revisão da compra, onde o usuário pode remover produtos do carrinho e seguir com o pagamento, sendo redirecionado para o ambiente de teste do Stripe - uma página de pagamento;
  - `pages/success`: Após ter preenchido os dados e efetuado o pagamento na página do Stripe, o usuário será redirecionado para essa página, que é a de confirmação e agradecimento pela compra.
 
#### A aplicação tem um total de 5 componentes de rota, sendo eles:

  - `pages/api/auth/[...nextauth]`: Esse é o arquivo de configurações globais do NextAuth;
  - `pages/api/checkout_sessions`: Essa rota é responsável por transformar os dados da compra recebidos no formato que o Stripe exige, e criar uma sessão no Stripe para o usuário. _Exemplo de uso:_ `pages/checkout`;
  - `pages/api/getCategories`: Essa rota é responsável por retornar as categorias dos produtos da base de dados. _Exemplo de uso:_ `utils/fetchCategories`;
  - `pages/api/getProducts`: Essa rota é responsável por retornar os produtos da base de dados. _Exemplo de uso:_ `utils/fetchProducts`;
  - `pages/api/getSession`: Essa rota é responsável por retornar uma sessão a partir do id recebido. _Exemplo de uso:_ `utils/fetchLineProducts`.

### 📑 Demais Componentes

#### A aplicação também conta com mais 17 componentes, sendo eles:

  - `pages/_app`: Nesse componente ficam configurações globais da aplicação, como os contextos do Redux e do NextAuth que envolvem toda a aplicação, estilos globais, e a renderização dos toasts;
  - `pages/_document`: Resumidamente, nesse componente ficam as configurações de **SEO** da aplicação.

  <br/>

  - `components/Button`: Esse componente é relativo ao botão reaproveitado periodicamente durante a aplicação;
  - `components/Cart`: Esse componente é relativo ao ícone de carrinho que aparece quando existe algum item no carrinho e o scroll está baixo de 400;
  - `components/CheckoutProduct`: Esse componente é relativo aos produtos mostrados na `pages/checkout`;
  - `components/Currency`: Esse componente é responsável pela formatação de moeda dos preços;
  - `components/Header`: Esse componente é relativo ao cabeçalho da aplicação;
  - `components/Product`: Esse componente é relativo aos produtos mostrados no `pages/index`.

  <br/>

  - `redux/cartSlice`: Utilizando o Redux, nesse componente está a lógica usada para lidar com as ações de interação do usuário em relação ao sistema de shopping. Ele exporta funções de extrema importância, como `addToCart` e `removeFromCart` (que são autoexplicativas), e valores como `selectCartProducts` (total de produtos no carrinho), e dentre outros, que são usados periodicamente pelo projeto;
  - `redux/store`: Esse é o arquivo de configurações do Redux.

  <br/>

  - `utils/api-helpers`: A ideia desse componente é a de agilizar e reutilizar determinados processos feitos na `pages/api`, componentizando-os nesse componente. Por enquanto ele exporta apenas a `fetchPostJSON`, responsável por agilizar requisições POST;
  - `utils/fetchCategories`: Esse componente responsável por agilizar a busca pelas categorias dos produtos na base de dados;
  - `utils/fetchProducts`: Esse componente responsável por agilizar a busca pelos produtos na base de dados;
  - `utils/fetchLineProducts`: Esse componente, trabalhando em conjunto com a `pages/api/getSession`, é responsável por retornar os produtos baseado no id enviado, e juntos eles realizam a verificação do id e podem retornar 404 caso esteja incorreto;
  - `utils/get-stripejs`: Esse componente é responsável por inicializar o Stripe, usando o **Sigleton Pattern** para não inicializá-lo mais de uma vez.

<br/>

  - `sanity`: Esse é o arquivo de configurações do Sanity. Ele também exporta a `urlFor`, função que auxilia na exibição das imagens dos produtos da base de dados;
  - `apple-store-database`: Essa é a base de dados do projeto, criada utilizando o Sanity.

## 📖 Clonando o Projeto

Para clonar e executar este projeto em seu computador, você precisará do [Git](https://git-scm.com/) e [Node.js v18.12.1](https://nodejs.org/en/) ou superior previamente instalados.<br>
Feito isso, no terminal:

```bash
# Clone esse repositório com:
> git clone https://github.com/Luk4x/apple-store.git

# Entre no repositório com:
> cd apple-store
```

Estando agora na raiz do projeto, crie o arquivo `.env.local`, que deve conter as seguintes variáveis de ambiente:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

Para configurar tais variáveis, você precisará criar um projeto no [Sanity](https://www.sanity.io/), [Stripe](https://stripe.com/en-br/) e [Google Cloud](https://cloud.google.com/), além de que precisará preencher a base de dados também.<br/>
Feito isso:

```bash
# Instale as dependências com:
> npm install
> cd apple-store-database
> npm install

# Execute o projeto com:
> npm run dev
> cd ..
> npm run dev

# Feito isso, você já poderá estar acessando o projeto em: http://localhost:3000
```
<p align="right">
  <a href="#%EF%B8%8F-apple-store-project">Voltar ao Topo</a>
</p>
