import Sidebar from "../../components/Sidebar/index";
import TituloCobranca from "../../components/TitutloCobranca/index";
import "./style.css";
import ResumeTable from "../../components/ResumeTable";
import { ResumeTableHeader, cards } from "../../utils/data";
export default function Home() {
  return (
    <div className="container-home">
      <Sidebar />

      <div>
        <header>
          <h1>HEADER</h1>
        </header>

        <main>
          <div className="contents-home">
            <div className="contents-title">
              {cards.map((item, index) => (
                <TituloCobranca item={item} key={index} />
              ))}
            </div>
            <div className="contents-small-table">
              {ResumeTableHeader.map((item, index) => (
                <ResumeTable item={item} key={index} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
