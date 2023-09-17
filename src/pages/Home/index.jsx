import Sidebar from "../../components/Sidebar/index";
import TituloCobranca from "../../components/TitutloCobranca/index";
import "./style.css";
import pagasImg from "../../assets/pagas.svg";
import vencidasImg from "../../assets/vencidas.svg";
import previstasIMG from "../../assets/previstas.png";
import { TableHeader } from "../../utils/data";
import MainTable from "../../components/MainTable";

const cards = [
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

export default function Home() {
  return (
    <div className="container-home teste">
      <Sidebar />

      <div>HEADER</div>

      <main className="container">
        <div className="teste2">
          <div className="contents-nav"></div>
          <div className="contents-home">
            <div className="contents-title">
              {cards.map((item, index) => (
                <TituloCobranca key={index} item={item} />
              ))}
            </div>
            <div className="contents-small-table">
              {TableHeader.map((item, index) => (
                <MainTable item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
