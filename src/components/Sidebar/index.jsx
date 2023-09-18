import { useLocation } from 'react-router-dom';
import Homeicon from '../../assets/home.svg';
import Clientsicon from '../../assets/clients.svg';
import Chargeicon from '../../assets/charge.svg';
import './style.css';

export default function Sidebar() {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/home';

  return (
    <nav className="sidebar-container">
      <ul className="sidebar-content">
        <li className={`sidebar-item ${isHomeRoute ? 'home-route' : ''}`}>
          <a href="/home">
            <img src={Homeicon} alt="Home" />
            <p id="oi">Home</p>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/clients">
            <img src={Clientsicon} alt="Clients" />
            <p>Clientes</p>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/charge">
            <img src={Chargeicon} alt="Charge" />
            <p>Cobranças</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
