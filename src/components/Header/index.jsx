import React, { useState } from "react";
import "./style.css";
import seta from "../../assets/seta.svg";
import cicleInfo from "../../assets/circle-info.svg";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeQuit from "../../assets/icone-quit.svg";
import iconePolygon from "../../assets/icone-polygon.svg";
import { useMainContext } from "../../hooks/useMainContext";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../ModalTeste/index";
import ConfirmationModal from "../ConfirmationModal";

export default function Header({ title, subtitle }) {
  const { setModalTeste, removeUserLog, userLog, modalTeste } =
    useMainContext();
  const [openMineModal, setOpenMiniModal] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  let { pathname } = useLocation();
  const navigator = useNavigate();

  const handleModal = () => {
    setModalTeste(true);
  };

  const handleOpenMiniModal = () => {
    setOpenMiniModal(!openMineModal);
  };

  const handleLogout = () => {
    setIsConfirmationModalOpen(true);
  };

  const confirmLogout = () => {
    removeUserLog();
    navigator("/");

    setIsConfirmationModalOpen(false);
  };

  const cancelLogout = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="contents-header">
          <div className="header-info">
            {pathname === "/home" ? (
              <h1 className="big-text">{title}</h1>
            ) : (
              <p className="text-client">
                {title}{" "}
                {subtitle && (
                  <span>
                    {" "}
                    <span className="separar-title">{">"}</span> {subtitle}
                  </span>
                )}
              </p>
            )}
          </div>

          <div className="user-info">
            <img className="circle-info" src={cicleInfo} alt="" />
            <p className="user-name" title={userLog.name}>
              {userLog.name}
            </p>
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
        </div>
      </header>
      {modalTeste ? <Modal /> : ""}

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onCancel={cancelLogout}
        onConfirm={confirmLogout}
      />
    </>
  );
}
