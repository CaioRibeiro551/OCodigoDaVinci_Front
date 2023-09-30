import "./style.css";
import IconFilter from "../../assets/filter.svg";
import IconSheach from "../../assets/sheach.svg";
import IconClients from "../../assets/clients.svg";
import { useMainContext } from "../../hooks/useMainContext";
import { usuarios } from "../../utils/data";
import { useState } from "react";

export default function MenuTableClients() {
  const { setFilter } = useMainContext();

  return (
    <div className="container-menu-table-clients">
      <div>
        <img src={IconClients} alt="clientes" />
        <h1>Cobranças </h1>
      </div>
      <div>
        <img src={IconFilter} alt="filtro" />
        <div className="container-input-shearch">
          <img src={IconSheach} alt="pesquisa" />
          <input
            type="text"
            name="shearch"
            placeholder="Pesquisar"
            onBlur={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
