import { useLocation } from "react-router-dom";
import Homeicon from "../../assets/home.svg";
import Clientsicon from "../../assets/clients.svg";
import Chargeicon from "../../assets/charge.svg";

export default function Sidebar() {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/home";

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content">
          <div className={`sidebar-item ${isHomeRoute ? "home-route" : ""}`}>
            <img src={Homeicon} alt="" />
            <p id="oi">Home</p>
          </div>
          <div className="sidebar-item">
            <img src={Clientsicon} alt="" />
            Clientes
          </div>
          <div className="sidebar-item">
            <img src={Chargeicon} alt="" />
            <p>Clientes</p>
          </div>
        </div>
      </div>
    </>
  );
}
