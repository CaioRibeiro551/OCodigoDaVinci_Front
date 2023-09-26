import Modal from "../../components/ModalEditUser";
import Sidebar from "../../components/Sidebar/index";
import TituloCobranca from "../../components/TituloCobranca";
import Header from "../../components/Header/index";
import { useMainContext } from "../../hooks/useMainContext";
import "./style.css";
import { useState, useEffect } from "react";
import Axios from "../../services/api";
import pagasImg from "../../assets/pagas.svg";
import vencidasImg from "../../assets/vencidas.svg";
import previstasIMG from "../../assets/previstas.png";
import { ResumeLargeTable } from "../../components/ResumeLargeTable";
import ResumeSmallTable from "../../components/ResumeSmallTable";

const headerTitle = {
  header: "Resumo das cobranças",
  emDia: "Clientes em dia",
  Inadimplente: "Clientes Inadimplentes",
  vencidas: "Cobranças Vencidas",
  pagas: "Cobranças Pagas",
  prevista: "Cobranças Previstas",
};

export default function Home() {
  const [removeLoad, setRemovedLoad] = useState(true);
  const { modalTeste, userLog } = useMainContext();
  const [clients, setClients] = useState([]);
  const [charges, setCharges] = useState([]);

  const getClients = async () => {
    try {
      const { data } = await Axios.get("/clients", {
        headers: {
          Authorization: userLog.token,
        },
      });

      setClients(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCharges = async () => {
    try {
      const { data } = await Axios.get("/charges", {
        headers: {
          Authorization: userLog.token,
        },
      });

      setCharges(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClients();
    getCharges();
  }, []);

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

  const totalVencidas = cobrancasPagas.reduce((total, objeto) => {
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
              />
              <ResumeSmallTable
                charges={cobrancasVencidas}
                header={headerTitle.vencidas}
              />
              <ResumeSmallTable
                charges={cobrancasPrevistas}
                header={headerTitle.prevista}
              />
              <ResumeLargeTable
                clients={clientsEmDia}
                header={headerTitle.emDia}
              />
              <ResumeLargeTable
                clients={clientsVencidos}
                header={headerTitle.Inadimplente}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
