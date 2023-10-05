import Modal from "../../components/ModalEditUser";
import Sidebar from "../../components/Sidebar/index";
import TituloCobranca from "../../components/TituloCobranca";
import Header from "../../components/Header/index";
import { useMainContext } from "../../hooks/useMainContext";
import "./style.css";
import pagasImg from "../../assets/pagas.svg";
import vencidasImg from "../../assets/vencidas.svg";
import previstasIMG from "../../assets/previstas.png";
import { ResumeLargeTable } from "../../components/ResumeLargeTable";
import ResumeSmallTable from "../../components/ResumeSmallTable";
import Loading from "../../components/LoadingPage";
import Menssage from "../../components/MensagemErroExclusaoCobranca";
import { useState } from "react";

const headerTitle = {
  header: "Resumo das cobranças",
  emDia: "Clientes em dia",
  Inadimplente: "Clientes Inadimplentes",
  vencidas: "Cobranças Vencidas",
  pagas: "Cobranças Pagas",
  prevista: "Cobranças Previstas",
};

export default function Home() {
  const { modalTeste, clients, charges, removeLoad, setRemovedLoad } =
    useMainContext();
  const [loadPage, setLoadPage] = useState(false);

  const clientsEmDia = clients.filter((client) => client.status == "Em dia");

  const clientsVencidos = clients.filter(
    (client) => client.status == "Inadimplente"
  );

  const cobrancasPagas = charges.filter((charge) => charge.status == "Paga");

  const cobrancasVencidas = charges.filter(
    (charge) => charge.status == "Vencida"
  );

  const cobrancasPrevistas = charges.filter(
    (charge) => charge.status == "Pendente"
  );

  const totalVencidas = cobrancasVencidas.reduce((total, objeto) => {
    return total + Number(objeto.value);
  }, 0);

  const totalPagas = cobrancasPagas.reduce((total, objeto) => {
    return total + Number(objeto.value);
  }, 0);

  const totalPrevistas = cobrancasPrevistas.reduce((total, objeto) => {
    return total + Number(objeto.value);
  }, 0);

  const cards = [
    {
      text: "Cobranças Pagas",
      valor: `R$ ${totalPagas.toLocaleString("pt-BR")}`,
      img: pagasImg,
      color: "#EEF6F6",
    },
    {
      text: "Cobranças Vencidas",
      valor: `R$ ${totalVencidas.toLocaleString("pt-BR")}`,
      img: vencidasImg,
      color: "#FFEFEF",
    },
    {
      text: "Cobranças Previstas",
      valor: `R$ ${totalPrevistas.toLocaleString("pt-BR")}`,
      img: previstasIMG,
      color: "#FCF6DC",
    },
  ];

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={headerTitle.header} />

        <div className="container-clients">
          <div className="contents-title">
            {cards.map((item, index) => (
              <TituloCobranca item={item} key={index} />
            ))}
          </div>

          {modalTeste && <Modal />}
          <div className="contents-small-table">
            <div>
              <ResumeSmallTable
                charges={cobrancasPagas}
                header={headerTitle.pagas}
                page={"/cobrancas"}
                filter={"paga"}
              />
              <ResumeSmallTable
                charges={cobrancasVencidas}
                header={headerTitle.vencidas}
                page={"/cobrancas"}
                filter={"vencida"}
              />
              <ResumeSmallTable
                charges={cobrancasPrevistas}
                header={headerTitle.prevista}
                page={"/cobrancas"}
                filter={"pendente"}
              />
              <ResumeLargeTable
                clients={clientsEmDia}
                header={headerTitle.emDia}
                page={"/clients"}
                filter={"Em dia"}
              />
              <ResumeLargeTable
                clients={clientsVencidos}
                header={headerTitle.Inadimplente}
                page={"/clients"}
                filter={"Inadimplente"}
              />
            </div>
          </div>
        </div>
      </div>
      {!removeLoad && <Loading />}
    </div>
  );
}
