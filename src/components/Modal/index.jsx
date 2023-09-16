import React, { useState } from 'react';
import './style.css'; // Importe seu arquivo de estilos CSS para estilizar o modal

export default function Modal() {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Edite seu cadastro</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-col">
                <label htmlFor="telefone">telefone</label>
                <input type="text" id="telefone" name="telefone" />
              </div>
            </div>
          </div>
          <div className="form-group form-group-vertical">
            {' '}
            <div className="form-col">
              <label htmlFor="novaSenha">Nova Senha</label>
              <input type="password" id="novaSenha" name="novaSenha" />
            </div>
            <div className="form-col">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
              />
            </div>
          </div>
          <button type="submit">Aplicar</button>
        </form>
      </div>
    </div>
  );
}
