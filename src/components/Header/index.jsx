import React, { useState } from "react";
import "./style.css";
import seta from "../../assets/seta.svg";
import cicleInfo from "../../assets/circle-info.svg";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeQuit from "../../assets/icone-quit.svg";
import iconePolygon from "../../assets/icone-polygon.svg";
import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../ModalTeste/index";

export default function Header() {
  const { setModalTeste, removeUserLog, userLog, modalTeste } =
    useMainContext();
  const [openMineModal, setOpenMiniModal] = useState(false);

  let { pathname } = useLocation();

  const navigator = useNavigate();

  const handleModal = () => {
    setModalTeste(true);
  };

  const handleOpenMiniModal = () => {
    setOpenMiniModal(!openMineModal);
  };

  const handleLogout = () => {
    removeUserLog();
    navigator("/");
  };

  return (
    <>
      <header className="full-header">
        <div className="header-info">
          {pathname === "/home" ? (
            <h1 className="big-text">Resumo das cobranças</h1>
          ) : (
            <p className="text-client">Clientes</p>
          )}
        </div>

        <div className="user-info">
          <img className="circle-info" src={cicleInfo} alt="" />
          <p>{userLog.name}</p>
          <img src={seta} alt="Seta" onClick={handleOpenMiniModal} />
          {openMineModal && (
            <div>
              <div className="button-edit">
                <img className="polygon-item" src={iconePolygon} alt="" />
                <div className="button-item">
                  <img src={iconeEdit} alt="" onClick={handleModal} />
                  <p>Editar</p>
                </div>
                <div className="button-item">
                  <img src={iconeQuit} alt="" onClick={handleLogout} />
                  <p>Sair</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {modalTeste ? <Modal /> : ""}
    </>
  );
}
