import "./style.css";
import Charge from "../../assets/cobranca.svg";

import { useState } from "react";
export default function FullTable({ lista }) {
  return (
    <div className="container-full-table">
      <table className="full-table table ">
        <thead className="relative-text">
          <tr className="font-roboto-bold font-tr">
            <th>Cliente</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Criar Cobranças</th>
          </tr>
        </thead>
        <tbody className="small-text ">
          {lista.map((item, index) => (
            <tr className="font-roboto font-tr line">
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.status}</td>
              <td>
                <a className="link-table" href="">
                  <img src={Charge} alt="" />
                  <span>Criar cobrança</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
