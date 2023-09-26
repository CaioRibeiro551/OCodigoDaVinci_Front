import "./style.css";
import Charge from "../../assets/cobranca.svg";
import iconOrdem from "../../assets/cobranca-icon.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import RegisterCharges from "../RegisterCharges";
import { useMainContext } from "../../hooks/useMainContext";

export default function FullTable({ lista }) {
  const [cobrancaReg, setCobrancaReg] = useState([]);
  const { openModalRegister, setOpenModalRegister } = useMainContext();

  const handleModal = (item) => {
    setOpenModalRegister(true);
    setCobrancaReg(item);
    return;
  };

  return (
    <div className="container-full-table">
      <table className="full-table">
        <thead className="relative-text">
          <tr>
            <th>
              <img src={iconOrdem} alt="" />
              Cliente
            </th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Criar Cobranças</th>
          </tr>
        </thead>
        <tbody className="small-text ">
          {lista.map((item) => (
            <tr className="font-roboto font-tr line" key={item.id}>
              <td>
                <NavLink to={`/client-detail/${item.id}`} id="Link">
                  {item.name}{" "}
                </NavLink>
              </td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <span
                  className={`status-cell ${
                    item.status === "Inadimplente"
                      ? "status-Inadimplente"
                      : "status-Em-dia"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <a
                  className="link-table"
                  href="#"
                  onClick={() => handleModal(item)}
                >
                  <img src={Charge} alt="" />
                  <span>Criar cobrança</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openModalRegister && (
        <RegisterCharges
          setOpenModalRegister={setOpenModalRegister}
          cobrancaReg={cobrancaReg}
        />
      )}
    </div>
  );
}
