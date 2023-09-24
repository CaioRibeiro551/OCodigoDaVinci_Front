import "./style.css";

import IconClients from "../../assets/clients.svg";

export default function MenuTableClientDetail({ name }) {
  return (
    <div className="container-menu-table-clients">
      <div>
        <img src={IconClients} alt="clientes" />
        <h1>{`${name}`} </h1>
      </div>
      <div></div>
    </div>
  );
}
