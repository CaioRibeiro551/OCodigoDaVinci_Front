import { useLocation, useNavigate } from "react-router-dom";
import Homeicon from "../../assets/home.svg";
import Clientsicon from "../../assets/clients.svg";
import Chargeicon from "../../assets/charge.svg";
import HomeIconActive from "../../assets/home-active.svg";
import ClientsIconActive from "../../assets/clients-active.svg";
import "./style.css";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [rote, setRote] = useState("");
  const [iconHome, setIconHome] = useState(HomeIconActive);
  const [iconClients, setIconClients] = useState(Clientsicon);

  const location = useLocation();
  const navigator = useNavigate("/clients");

  const verifyActive = () => {
    setRote(location.pathname);
    if (rote === "/home") {
      setIconHome(HomeIconActive);
      setIconClients(Clientsicon);
      return;
    }
    if (rote === "/clients") {
      setIconHome(Homeicon);
      setIconClients(ClientsIconActive);
      return;
    }
  };

  useEffect(() => {
    verifyActive();
  }, [rote]);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content">
          <div
            className={`sidebar-item ${rote === "/home" && "active"}`}
            onClick={() => navigator("/home")}
          >
            <img src={iconHome} alt="" />
            <p>Home</p>
          </div>

          <div
            className={`sidebar-item ${rote === "/clients" && "active"}`}
            onClick={() => navigator("/clients")}
          >
            <img src={iconClients} alt="" />
            <p>Clientes</p>
          </div>

          <div className="sidebar-item">
            <img src={Chargeicon} alt="" />
            <p>Cobranças</p>
          </div>
        </div>
      </div>
    </>
  );
}
