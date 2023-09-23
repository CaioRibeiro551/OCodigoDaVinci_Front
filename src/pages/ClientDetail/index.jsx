import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Axios from "../../services/api";
import { useMainContext } from "../../hooks/useMainContext";
import MenuTableClients from "../../components/MenuTableClients";
import FullTableCobranca from "../../components/FullTableCobranca";

function ClientDetail() {
  const { userLog } = useMainContext();

  const title = "Clientes";
  const subtitle = "Detalhes do cliente";
  async function getOne() {
    try {
      const responde = await Axios.get("/showUser/121", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(responde);
    } catch (error) {}
  }
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
                      <p>email@text</p>
                    </div>
                    <div className="content-text">
                      <span>Telefone</span>
                      <p>'31 9 9462 8654'</p>
                    </div>
                    <div className="content-text">
                      <span>CPFl</span>
                      <p>054 365 255 87</p>
                    </div>
                  </div>
                </div>
                <div className="container-text-detail">
                  <div className="container-text-back">
                    <div className="content-text">
                      <span>Endereço</span>
                      <p>email@text</p>
                    </div>
                    <div className="content-text">
                      <span>Bairro</span>
                      <p>'31 9 9462 8654'</p>
                    </div>
                    <div className="content-text">
                      <span>Complemento</span>
                      <p>054 365 255 87</p>
                    </div>
                    <div className="content-text">
                      <span>CEP</span>
                      <p>054 365 255 87</p>
                    </div>
                    <div className="content-text">
                      <span>Cidade</span>
                      <p>054 365 255 87</p>
                    </div>
                    <div className="content-text">
                      <span>UF</span>
                      <p>054 365 255 87</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FullTableCobranca />
        </main>
      </div>
    </div>
  );
}

export default ClientDetail;
