import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Axios from "../../services/api";
import { useMainContext } from "../../hooks/useMainContext";
import MenuTableClients from "../../components/MenuTableClients";
import FullTableCobranca from "../../components/FullTableCobranca";
import RegisterCharges from "../../components/RegisterCharges";

function ClientDetail() {
  const { userLog } = useMainContext();

  const title = "Clientes";
  const subtitle = "Detalhes do cliente";

  const [showClient, setShowClient] = useState();
  const [showCharges, setShowCharges] = useState([]);

  useEffect(() => {
    async function getOne() {
      try {
        const response = await Axios.get(`/clients/134/clients/134`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });
        console.log(response.data);
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
        const response = await Axios.get(`/clients/134/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });
        console.log(response.data);
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
          <MenuTableClients />
          <div>
            <div className="content-start">
              <div className="contents-title-detail">
                <h2 className="medium-text ">Dados do cliente</h2>
                <button className="btn-cancel">Teste</button>
              </div>
              <div>
                <div className="container-text-detail">
                  <div className="container-text-up">
                    <div className="content-text">
                      <span>E-mail</span>
                      <p>{showClient?.email}</p>
                    </div>
                    <div className="content-text">
                      <span>Telefone</span>
                      <p>{showClient?.phone}</p>
                    </div>
                    <div className="content-text">
                      <span>CPFl</span>
                      <p>{showClient?.cpf}</p>
                    </div>
                  </div>
                </div>
                <div className="container-text-detail">
                  <div className="container-text-back">
                    <div className="content-text">
                      <span>Endereço</span>
                      <p>{showClient?.address}</p>
                    </div>
                    <div className="content-text">
                      <span>Bairro</span>
                      <p>{showClient?.neighborhood}</p>
                    </div>
                    <div className="content-text">
                      <span>Complemento</span>
                      <p>{showClient?.complement}</p>
                    </div>
                    <div className="content-text">
                      <span>CEP</span>
                      <p>{showClient?.cep}</p>
                    </div>
                    <div className="content-text">
                      <span>Cidade</span>
                      <p>{showClient?.city}</p>
                    </div>
                    <div className="content-text">
                      <span>UF</span>
                      <p>{showClient?.state}</p>
                    </div>
                  </div>
                </div>
              </div>
              <RegisterCharges />
            </div>
          </div>
          <FullTableCobranca cobrancas={showCharges} />
        </main>
      </div>
    </div>
  );
}

export default ClientDetail;
