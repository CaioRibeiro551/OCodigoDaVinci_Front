import "./style.css";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeExcluir from "../../assets/excluir.svg";
import iconeCobranca from "../../assets/cobranca-icon.svg";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { dadosCobrancas } from "../../utils/data";
import { useMainContext } from "../../hooks/useMainContext";
import { useLocation } from "react-router-dom";

export default function FullTableCobranca({}) {
  const [cobrancas, setCobrancas] = useState([]);
  const [remoLoad, setRemovedLoad] = useState(true);
  const { userLog } = useMainContext();

  let { pathname } = useLocation();

  useEffect(() => {
    async function getCobrancas() {
      try {
        setRemovedLoad(false);
        const response = await api.get(`/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });

        setCobrancas(response.data);
        setRemovedLoad(true);
      } catch (error) {
        console.log(error);
        setRemovedLoad(true);
      }
    }

    getCobrancas();
  }, []);

  return (
    <div
      className={`${
        pathname === "/cobrancas"
          ? "container-full-table"
          : "container-resume-table"
      }`}
    >
      <table className="full-table table">
        <thead className="relative-text">
          <tr>
            <th>
              {" "}
              <img src={iconeCobranca} alt="" />
              Cliente
            </th>

            <th>
              <img src={iconeCobranca} alt="" />
              ID Cob.
            </th>
            <th>Valor</th>
            <th>Data de venc.</th>
            <th>Status</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="small-text">
          {dadosCobrancas.map((item, index) => (
            <tr key={index}>
              <td>{item.cliente}</td>
              <td>{item.idCob}</td>
              <td>{item.valor}</td>
              <td>{item.dataVencimento}</td>
              <td>{item.status}</td>
              <td title={item.descricao}>{item.descricao}</td>

              <td className="icon-item">
                <p>
                  <img src={iconeEdit} alt="Editar" />
                  <span>Editar </span>
                </p>

                <p>
                  <img src={iconeExcluir} alt="Excluir" />
                  <span>Excluir </span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
