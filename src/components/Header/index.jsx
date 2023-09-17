import React, { useState } from "react";
import "./style.css";
import seta from "../../assets/seta.svg";
import cicleInfo from "../../assets/circle-info.svg";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeQuit from "../../assets/icone-quit.svg";
import iconePolygon from "../../assets/icone-polygon.svg";
import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";

export default function Header() {
  const { modalTeste, setModalTeste } = useMainContext();
  const [openMineModal, setOpenMiniModal] = useState(false);
  const handleModal = () => {
    setModalTeste(true);
  };

  const handleOpenMiniModal = () => {
    setOpenMiniModal(!openMineModal);
  };
  return (
    <>
      <header className="full-header">
        <div className="header-info">
          <h1 className="big-text">Resumo das cobranças</h1>
        </div>
        <div className="user-info">
          <img className="circle-info" src={cicleInfo} alt="" />
          <p>Lorena</p>
          <img src={seta} alt="Seta" onClick={handleOpenMiniModal} />
          {openMineModal && (
            <div>
              <div>
                <img className="polygon-item" src={iconePolygon} alt="" />
                <div className="button-edit">
                  <div className="button-item">
                    <img src={iconeEdit} alt="" />
                    <p>Editar</p>
                  </div>
                  <div className="button-item">
                    <img src={iconeQuit} alt="" />
                    <p>Sair</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
