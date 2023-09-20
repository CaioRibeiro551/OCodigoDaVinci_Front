import './style.css';
import iconeEdit from '../../assets/icone-edit.svg';
import iconeExcluir from '../../assets/excluir.svg';
import iconeCobranca from '../../assets/cobranca-icon.svg';

import { useState } from 'react';

export default function FullTable({ lista }) {
  return (
    <div className="container-full-table">
      <table className="full-table table ">
        <thead className="relative-text">
          <tr className="font-roboto-bold font-tr">
            <img src={iconeCobranca} alt="" />
            <th>Cliente</th>
            <img src={iconeCobranca} alt="" />
            <th>ID Cob.</th>
            <th>Valor</th>
            <th>Data de venc.</th>
            <th>Status</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody className="small-text">
          {lista.map((item, index) => (
            <tr className="font-roboto font-tr line">
              <td>{item.cliente}</td>
              <td>{item.cpf}</td>
              <td>{item.valor}</td>
              <td>{item.data}</td>
              <td>{item.status}</td>
              <td></td>
              <td>
                <div className="icon-group">
                  <div className="icon-item">
                    <img src={iconeEdit} alt="Editar" />
                    <p>Editar</p>
                  </div>
                  <div className="icon-item">
                    <img src={iconeExcluir} alt="Excluir" />
                    <p>Excluir</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
