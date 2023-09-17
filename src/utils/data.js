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
