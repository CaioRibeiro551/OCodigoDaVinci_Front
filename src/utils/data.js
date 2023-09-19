import inadimplentesIMG from "./../assets/clientes-inadimplentes.svg";
import clientesEmDiaIMG from "./../assets/clientes-em-dia.svg";

export const ResumeTableHeader = [
  {
    Clients: "Clientes",
    ID: "ID da Cob.",
    Valor: "Valor",
    Title: "Cobranças Vencidas",
    Imagem: "",
    NumColor: "#971D1D",
    BkColor: "#FFEFEF",
    Width: "small",
  },
  {
    Clients: "Clientes",
    ID: "ID da Cob.",
    Valor: "Valor",
    Title: "Cobranças Previstas",
    Imagem: "",
    NumColor: "#C5A605",
    BkColor: "#FCF6DC",
    Width: "small",
  },
  {
    Clients: "Clientes",
    ID: "ID da Cob.",
    Valor: "Valor",
    Title: "Cobranças Pagas",
    Imagem: "",
    NumColor: "#1FA7AF",
    BkColor: "#EEF6F6",
    Width: "small",
  },
  {
    Clients: "Clientes",
    ID: "ID da Cob.",
    Valor: "CPF",
    Title: "Clientes Inadimplentes",
    Imagem: inadimplentesIMG,
    NumColor: "#971D1D",
    BkColor: "#FFEFEF",
    Width: "large",
  },
  {
    Clients: "Clientes",
    ID: "ID da Cob.",
    Valor: "CPF",
    Title: "Cobranças em dia",
    Imagem: clientesEmDiaIMG,
    NumColor: "#1FA7AF",
    BkColor: "#EEF6F6",
    Width: "large",
  },
];

import pagasImg from "./../assets/pagas.svg";
import vencidasImg from "./../assets/vencidas.svg";
import previstasIMG from "./../assets/previstas.png";

export const cards = [
  {
    text: "Cobranças Pagas",
    valor: `R$ 30.000`,
    img: pagasImg,
    color: "#EEF6F6",
  },
  {
    text: "Cobranças Vencidas",
    valor: `R$ 7.000`,
    img: vencidasImg,
    color: "#FFEFEF",
  },
  {
    text: "Cobranças Previstas",
    valor: `R$ 10.000`,
    img: previstasIMG,
    color: "#FCF6DC",
  },
];

export const FullTableHeader = [
  {
    Clients: "Cliente",
    CPF: "CPF",
    Email: "E-mail",
    Phone: "Telefone",
    Status: "Status",
    CreateCharges: "Criar Cobranças",
  },
];

export const clients = [
  {
    nome: "Sara da Silva",
    cpf: "054 365 255 87",
    email: "searasilva@cubos.io",
    telefone: "71 9 9462 8654",
    status: "Em dia",
  },
  {
    nome: "Carlos Santos",
    cpf: "123 456 789 00",
    email: "carlossantos@cubos.io",
    telefone: "71 9 8765 4321",
    status: "Inadimplente",
  },
  {
    nome: "Ana Maria",
    cpf: "987 654 321 00",
    email: "anamaria@cubos.io",
    telefone: "71 9 1234 5678",
    status: "Em dia",
  },
  {
    nome: "José Oliveira",
    cpf: "456 789 123 00",
    email: "joseoliveira@cubos.io",
    telefone: "71 9 5678 1234",
    status: "Inadimplente",
  },
  {
    nome: "Mariana Ferreira",
    cpf: "789 123 456 00",
    email: "marianaferreira@cubos.io",
    telefone: "71 9 2345 6789",
    status: "Em dia",
  },
  {
    nome: "Ricardo Pereira",
    cpf: "321 654 987 00",
    email: "ricardopereira@cubos.io",
    telefone: "71 9 3456 7890",
    status: "Inadimplente",
  },
  {
    nome: "Julia Santos",
    cpf: "654 987 321 00",
    email: "juliasantos@cubos.io",
    telefone: "71 9 4567 8901",
    status: "Em dia",
  },
  {
    nome: "Paulo Lima",
    cpf: "987 321 654 00",
    email: "paulolima@cubos.io",
    telefone: "71 9 5678 9012",
    status: "Inadimplente",
  },
  {
    nome: "Luana Silva",
    cpf: "789 654 321 00",
    email: "luanasilva@cubos.io",
    telefone: "71 9 6789 0123",
    status: "Em dia",
  },
  {
    nome: "Felipe Almeida",
    cpf: "456 321 654 00",
    email: "felipealmeida@cubos.io",
    telefone: "71 9 7890 1234",
    status: "Inadimplente",
  },
];
