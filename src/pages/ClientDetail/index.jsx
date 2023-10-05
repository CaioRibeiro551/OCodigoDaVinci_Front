import React, { useEffect, memo } from "react";
import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Axios from "../../services/api";
import { useMainContext } from "../../hooks/useMainContext";
import FullTableCobranca from "../../components/FullTableCobranca";
import RegisterCharges from "../../components/RegisterCharges";
import { useParams, useNavigate } from "react-router-dom";

import ModalEditClients from "../../components/ModalEditClients";
import { formatarCPF, formatarTelefone, formatarCEP } from "../../utils/data";
import MenuTableClients from "../../components/MenuTableClients";
import { useStateProvider } from "../../hooks/useStateProvider";

function ClientDetail() {
  const title = "Clientes";
  const subtitle = "Detalhes do cliente";
  const { getOne } = useMainContext();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!getOne) {
      navigate("/home");
    }
  }, [navigate]);

  const { handleOpen, open, handleOpenEdith, openEdith, charges } =
    useMainContext();

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} subtitle={subtitle} />

        <main className="container-clients">
          <MenuTableClients name={getOne?.name} />
          <div>
            <div className="content-start">
              <div className="contents-title-detail">
                <h2 className="medium-text ">Dados do cliente</h2>
                <button
                  onClick={handleOpenEdith}
                  className="btn-cancel btn-large"
                  type="button"
                >
                  Editar Cliente
                </button>
              </div>
              <div>
                <div className="container-text-detail">
                  <div className="container-text-up">
                    <div className="content-text">
                      <h6>E-mail</h6>
                      <p>{getOne?.email}</p>
                    </div>
                    <div className="content-text">
                      <h6>Telefone</h6>
                      <p>{formatarTelefone(getOne?.phone)}</p>
                    </div>
                    <div className="content-text">
                      <h6>CPF</h6>
                      <p>{formatarCPF(getOne?.cpf)}</p>
                    </div>
                  </div>
                </div>
                <div className="container-text-detail">
                  <div className="container-text-back">
                    <div className="content-text">
                      <h6>Endereço</h6>
                      <p>{getOne?.address}</p>
                    </div>
                    <div className="content-text">
                      <h6>Bairro</h6>
                      <p>{getOne?.neighborhood}</p>
                    </div>
                    <div className="content-text">
                      <h6>Complemento</h6>
                      <p>{getOne?.complement}</p>
                    </div>
                    <div className="content-text">
                      <h6>CEP</h6>
                      <p>{formatarCEP(getOne?.cep)}</p>
                    </div>
                    <div className="content-text">
                      <h6>Cidade</h6>
                      <p>{getOne?.city}</p>
                    </div>
                    <div className="content-text">
                      <h6>UF</h6>
                      <p>{getOne?.state}</p>
                    </div>
                  </div>
                </div>
              </div>
              {open && <RegisterCharges client={getOne} id={id} />}
              {openEdith && <ModalEditClients id={id} client={getOne} />}
            </div>
          </div>
          <FullTableCobranca cobrancas={charges} handleOpen={handleOpen} />
        </main>
      </div>
    </div>
  );
}

export default memo(ClientDetail);
