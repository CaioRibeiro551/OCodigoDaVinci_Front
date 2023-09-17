import React from "react";
import "./style.css";
import seta from "../../assets/seta.svg";
import cicleInfo from "../../assets/circle-info.svg";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeQuit from "../../assets/icone-quit.svg";
import iconePolygon from "../../assets/icone-polygon.svg";
import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setModalTeste, removeUserLog } = useMainContext();
  const navigator = useNavigate();

  const handleModal = () => {
    setModalTeste(true);
  };

  const handleLogout = () => {
    navigator("/");
    removeUserLog();
  };
  return (
    <>
      <header className="full-header">
        <div className="header-info">
          <h1>Resumo das cobranças</h1>
        </div>
        <div className="user-info">
          <img className="circle-info" src={cicleInfo} alt="" />
          <p>Lorena</p>
          <img src={seta} alt="Seta" />
        </div>
        <img className="polygon-item" src={iconePolygon} alt="" />
        <div className="button-edit">
          <div className="button-item">
            <img src={iconeEdit} alt="" onClick={handleModal} />
            <p>Editar</p>
          </div>
          <div className="button-item">
            <img src={iconeQuit} alt="" onClick={handleLogout} />
            <p>Sair</p>
          </div>
        </div>
      </header>
    </>
  );
}
