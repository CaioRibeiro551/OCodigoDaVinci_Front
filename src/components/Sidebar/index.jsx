import { useLocation, useNavigate } from "react-router-dom";
import Homeicon from "../../assets/home.svg";
import Clientsicon from "../../assets/clients.svg";
import Cobrancaicon from "../../assets/FolhaCobranca.svg";
import CobrancaiconActive from "../../assets/FolhaCobranca-active.svg";
import HomeIconActive from "../../assets/home-active.svg";
import ClientsIconActive from "../../assets/clients-active.svg";
import "./style.css";
import { useEffect, useState } from "react";
import Chargeicon from "../../assets/charge.svg";

export default function Sidebar() {
  const [rote, setRote] = useState("");
  const [iconHome, setIconHome] = useState(Homeicon);
  const [iconClients, setIconClients] = useState(Clientsicon);
  const [iconCobranca, setIconCobranca] = useState(Cobrancaicon);

  const location = useLocation();
  const navigator = useNavigate("/clients");

  const verifyActive = () => {
    setRote(location.pathname);
    if (rote === "/home") {
      setIconHome(HomeIconActive);
      setIconClients(Clientsicon);
      setIconCobranca(Cobrancaicon);
      return;
    }
    if (rote === "/clients") {
      setIconHome(Homeicon);
      setIconCobranca(Cobrancaicon);
      setIconClients(ClientsIconActive);
      return;
    }
    if (rote === "/cobrancas") {
      setIconHome(Homeicon);
      setIconClients(Clientsicon);
      setIconCobranca(CobrancaiconActive);
      return;
    }
  };

  useEffect(() => {
    verifyActive();
  }, [rote]);

  return (
    <aside>
      <div className="sidebar-container">
        <nav className="sidebar-content">
          <li
            className={`sidebar-item ${rote === "/home" && "active"}`}
            onClick={() => navigator("/home")}
          >
            <img src={iconHome} alt="" />
            <p>Home</p>
          </li>

          <li
            className={`sidebar-item ${rote === "/clients" && "active"}`}
            onClick={() => navigator("/clients")}
          >
            <img src={iconClients} alt="" />
            <p>Clientes</p>
          </li>

          <li
            className={`sidebar-item ${rote === "/cobrancas" && "active"}`}
            onClick={() => navigator("/cobrancas")}
          >
            <img src={iconCobranca} alt="" />
            <p>Cobranças</p>
          </li>
        </nav>
      </div>
    </aside>
  );
}
