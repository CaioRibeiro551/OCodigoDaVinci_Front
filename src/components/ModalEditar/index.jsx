import React, { useState } from 'react';
import './style.css';
import close from '../../assets/close.png';

export default function Modal() {
  return (
    <div className="modal-overlay">
      <form action="">
        <h1>Editar usuário</h1>
        <div className="icon-close">
          <img src={close} alt="" />
        </div>
        <div className="container-inputs">
          <label htmlFor="">Nome</label>
          <input type="text" />
        </div>
        <div className="container-inputs">
          <label htmlFor="">E-mail</label>
          <input type="text" />
        </div>
        <div className="container-cpf-tel">
          <div className="container-inputs">
            <label htmlFor="">CPF</label>
            <input type="text" />
          </div>
          <div className="container-inputs">
            <label htmlFor="">Telefone</label>
            <input type="text" />
          </div>
        </div>
        <div className="container-inputs">
          <label htmlFor="">Senha</label>
          <input type="text" />
        </div>
        <div className="container-inputs">
          <label htmlFor="">Confirmar senha</label>
          <input type="text" />
        </div>
        <button>Aplicar</button>
      </form>
    </div>
  );
}
