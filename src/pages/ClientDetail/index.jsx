import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Axios from "../../services/api";
import { useMainContext } from "../../hooks/useMainContext";

import FullTableCobranca from "../../components/FullTableCobranca";
import RegisterCharges from "../../components/RegisterCharges";
import MenuTableClientDetail from "../../components/MenuTableClientDetail";
import { useParams } from "react-router-dom";

function ClientDetail() {
  const title = "Clientes";
  const subtitle = "Detalhes do cliente";

  const { id } = useParams();

  const { userLog, handleOpen, open } = useMainContext();

  const handleCloseModal = () => {};
  const [showClient, setShowClient] = useState();
  const [showCharges, setShowCharges] = useState([]);

  useEffect(() => {
    async function getOne() {
      try {
        const response = await Axios.get(`/clients/${id}/clients/${id}`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });

        setShowClient(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getOne();
  }, []);

  useEffect(() => {
    async function getCharges() {
      try {
        const response = await Axios.get(`/clients/${id}/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });

        setShowCharges(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCharges();
  }, []);

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} subtitle={subtitle} />

        <main className="container-clients">
          <MenuTableClientDetail name={showClient?.name} />
          <div>
            <div className="content-start">
              <div className="contents-title-detail">
                <h2 className="medium-text ">Dados do cliente</h2>
                <button className="btn-cancel btn-large" type="button">
                  Editar Cliente
                </button>
              </div>
              <div>
                <div className="container-text-detail">
                  <div className="container-text-up">
                    <div className="content-text">
                      <h6>E-mail</h6>
                      <p>{showClient?.email}</p>
                    </div>
                    <div className="content-text">
                      <h6>Telefone</h6>
                      <p>{showClient?.phone}</p>
                    </div>
                    <div className="content-text">
                      <h6>CPFl</h6>
                      <p>{showClient?.cpf}</p>
                    </div>
                  </div>
                </div>
                <div className="container-text-detail">
                  <div className="container-text-back">
                    <div className="content-text">
                      <h6>Endereço</h6>
                      <p>{showClient?.address}</p>
                    </div>
                    <div className="content-text">
                      <h6>Bairro</h6>
                      <p>{showClient?.neighborhood}</p>
                    </div>
                    <div className="content-text">
                      <h6>Complemento</h6>
                      <p>{showClient?.complement}</p>
                    </div>
                    <div className="content-text">
                      <h6>CEP</h6>
                      <p>{showClient?.cep}</p>
                    </div>
                    <div className="content-text">
                      <h6>Cidade</h6>
                      <p>{showClient?.city}</p>
                    </div>
                    <div className="content-text">
                      <h6>UF</h6>
                      <p>{showClient?.state}</p>
                    </div>
                  </div>
                </div>
              </div>
              {open && (
                <RegisterCharges name={showClient?.name} client_id={id} />
              )}
            </div>
          </div>
          <FullTableCobranca cobrancas={showCharges} handleOpen={handleOpen} />
        </main>
      </div>
    </div>
  );
}

export default ClientDetail;
