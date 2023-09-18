import "./style.css";
import IconFilter from "../../assets/filter.svg";
import IconSheach from "../../assets/sheach.svg";
import IconClients from "../../assets/clients.svg";

export default function MenuTableClients() {
  return (
    <div className="container-menu-table-clients">
      <div>
        <img src={IconClients} alt="clientes" />
        <h1>Clientes</h1>
      </div>
      <div>
        <button type="button">+ Adicionar Clientes</button>
        <img src={IconFilter} alt="filtro" />
        <div className="container-input-shearch">
          <img src={IconSheach} alt="pesquisa" />
          <input type="text" name="shearch" placeholder="Pesquisar" />
        </div>
      </div>
    </div>
  );
}
