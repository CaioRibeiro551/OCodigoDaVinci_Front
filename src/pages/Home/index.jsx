import React from 'react';
import Sidebar from '../../components/Sidebar/index';
import Table from '../../components/Table/index';
import TituloCobranca from '../../components/TituloCobranca/index';
import './style.css';
import seta from '../../assets/seta.svg';
import cicleInfo from '../../assets/circle-info.svg';

export default function Home() {
  return (
    <div className="page-container">
      <header className="full-header">
        <div className="header-info">
          <h1>Resumo das cobranças</h1>
        </div>
        <div className="user-info">
          <img className="circle-info" src={cicleInfo} alt="" />
          <p>Lorena</p>
          <img src={seta} alt="Seta" />
        </div>
      </header>
      <main className="main-container">
        <Sidebar />
        <div className="card-container">
          <div className="card">
            <TituloCobranca tipo="pagas" valor={'R$30.000'} />
            <Table />
          </div>

          <div className="card">
            <TituloCobranca tipo="vencidas" valor={'R$30.000'} />
            <Table />
          </div>

          <div className="card">
            <TituloCobranca tipo="previstas" valor={'R$30.000'} />
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}
