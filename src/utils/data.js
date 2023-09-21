import inadimplentesIMG from './../assets/clientes-inadimplentes.svg';
import clientesEmDiaIMG from './../assets/clientes-em-dia.svg';

export const ResumeTableHeader = [
  {
    Clients: 'Clientes',
    ID: 'ID da Cob.',
    Valor: 'Valor',
    Title: 'Cobranças Vencidas',
    Imagem: '',
    NumColor: '#971D1D',
    BkColor: '#FFEFEF',
    Width: 'small',
  },
  {
    Clients: 'Clientes',
    ID: 'ID da Cob.',
    Valor: 'Valor',
    Title: 'Cobranças Previstas',
    Imagem: '',
    NumColor: '#C5A605',
    BkColor: '#FCF6DC',
    Width: 'small',
  },
  {
    Clients: 'Clientes',
    ID: 'ID da Cob.',
    Valor: 'Valor',
    Title: 'Cobranças Pagas',
    Imagem: '',
    NumColor: '#1FA7AF',
    BkColor: '#EEF6F6',
    Width: 'small',
  },
  {
    Clients: 'Clientes',
    ID: 'ID da Cob.',
    Valor: 'CPF',
    Title: 'Clientes Inadimplentes',
    Imagem: inadimplentesIMG,
    NumColor: '#971D1D',
    BkColor: '#FFEFEF',
    Width: 'large',
  },
  {
    Clients: 'Clientes',
    ID: 'ID da Cob.',
    Valor: 'CPF',
    Title: 'Cobranças em dia',
    Imagem: clientesEmDiaIMG,
    NumColor: '#1FA7AF',
    BkColor: '#EEF6F6',
    Width: 'large',
  },
];

import pagasImg from './../assets/pagas.svg';
import vencidasImg from './../assets/vencidas.svg';
import previstasIMG from './../assets/previstas.png';

export const cards = [
  {
    text: 'Cobranças Pagas',
    valor: `R$ 30.000`,
    img: pagasImg,
    color: '#EEF6F6',
  },
  {
    text: 'Cobranças Vencidas',
    valor: `R$ 7.000`,
    img: vencidasImg,
    color: '#FFEFEF',
  },
  {
    text: 'Cobranças Previstas',
    valor: `R$ 10.000`,
    img: previstasIMG,
    color: '#FCF6DC',
  },
];

export const FullTableHeader = [
  {
    Clients: 'Cliente',
    CPF: 'CPF',
    Email: 'E-mail',
    Phone: 'Telefone',
    Status: 'Status',
    CreateCharges: 'Criar Cobranças',
  },
];

export const clients = [
  {
    nome: 'Sara da Silva',
    cpf: '054 365 255 87',
    email: 'searasilva@cubos.io',
    telefone: '71 9 9462 8654',
    status: 'Em dia',
  },
  {
    nome: 'Carlos Santos',
    cpf: '123 456 789 00',
    email: 'carlossantos@cubos.io',
    telefone: '71 9 8765 4321',
    status: 'Inadimplente',
  },
  {
    nome: 'Ana Maria',
    cpf: '987 654 321 00',
    email: 'anamaria@cubos.io',
    telefone: '71 9 1234 5678',
    status: 'Em dia',
  },
  {
    nome: 'José Oliveira',
    cpf: '456 789 123 00',
    email: 'joseoliveira@cubos.io',
    telefone: '71 9 5678 1234',
    status: 'Inadimplente',
  },
  {
    nome: 'Mariana Ferreira',
    cpf: '789 123 456 00',
    email: 'marianaferreira@cubos.io',
    telefone: '71 9 2345 6789',
    status: 'Em dia',
  },
  {
    nome: 'Ricardo Pereira',
    cpf: '321 654 987 00',
    email: 'ricardopereira@cubos.io',
    telefone: '71 9 3456 7890',
    status: 'Inadimplente',
  },
  {
    nome: 'Julia Santos',
    cpf: '654 987 321 00',
    email: 'juliasantos@cubos.io',
    telefone: '71 9 4567 8901',
    status: 'Em dia',
  },
  {
    nome: 'Paulo Lima',
    cpf: '987 321 654 00',
    email: 'paulolima@cubos.io',
    telefone: '71 9 5678 9012',
    status: 'Inadimplente',
  },
  {
    nome: 'Luana Silva',
    cpf: '789 654 321 00',
    email: 'luanasilva@cubos.io',
    telefone: '71 9 6789 0123',
    status: 'Em dia',
  },
  {
    nome: 'Felipe Almeida',
    cpf: '456 321 654 00',
    email: 'felipealmeida@cubos.io',
    telefone: '71 9 7890 1234',
    status: 'Inadimplente',
  },
];

export const dadosCobrancas = [
  {
    cliente: 'Cliente 1',
    idCob: 12345,
    valor: 100.0,
    dataVencimento: '2023-10-15',
    status: 'Pendente',
    descricao: 'Descrição da cobrança 1',
  },
  {
    cliente: 'Cliente 2',
    idCob: 67890,
    valor: 150.0,
    dataVencimento: '2023-09-30',
    status: 'Pago',
    descricao: 'Descrição da cobrança 2',
  },
  {
    cliente: 'Cliente 3',
    idCob: 98765,
    valor: 75.0,
    dataVencimento: '2023-11-05',
    status: 'Pendente',
    descricao: 'Descrição da cobrança 3',
  },
  {
    cliente: 'Cliente 4',
    idCob: 54321,
    valor: 200.0,
    dataVencimento: '2023-10-20',
    status: 'Pendente',
    descricao: 'Descrição da cobrança 4',
  },
  {
    cliente: 'Cliente 5',
    idCob: 11223,
    valor: 50.0,
    dataVencimento: '2023-10-08',
    status: 'Pago',
    descricao: 'Descrição da cobrança 5',
  },
  {
    cliente: 'Cliente 6',
    idCob: 99887,
    valor: 90.0,
    dataVencimento: '2023-11-18',
    status: 'Pendente',
    descricao: 'Descrição da cobrança 6',
  },
  {
    cliente: 'Cliente 7',
    idCob: 76543,
    valor: 120.0,
    dataVencimento: '2023-09-25',
    status: 'Pago',
    descricao: 'Descrição da cobrança 7',
  },
  {
    cliente: 'Cliente 8',
    idCob: 11234,
    valor: 80.0,
    dataVencimento: '2023-11-12',
    status: 'Pendente',
    descricao: 'Descrição da cobrança 8',
  },
  {
    cliente: 'Cliente 9',
    idCob: 55555,
    valor: 300.0,
    dataVencimento: '2023-10-02',
    status: 'Pago',
    descricao: 'Descrição da cobrança 9',
  },
  {
    cliente: 'Cliente 10',
    idCob: 77777,
    valor: 250.0,
    dataVencimento: '2023-09-15',
    status: 'Pendente',
    descricao: 'Descrição da cobrança 10',
  },
  {
    cliente: 'Cliente 11',
    idCob: 88888,
    valor: 180.0,
    dataVencimento: '2023-10-28',
    status: 'Pendente',
    descricao: 'Descrição da cobrança 11',
  },
];
