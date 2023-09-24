import "./style.css";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeExcluir from "../../assets/excluir.svg";
import iconeCobranca from "../../assets/cobranca-icon.svg";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMainContext } from "../../hooks/useMainContext";
import { format } from "date-fns";
import Loading from "../../components/LoadingPage";

export default function FullTableCobranca({}) {
  const [cobrancas, setCobrancas] = useState([]);
  const [removeLoad, setRemovedLoad] = useState(true);
  const { userLog } = useMainContext();

  const { pathname } = useLocation();
  useEffect(() => {
    async function getCobrancas() {
      try {
        setRemovedLoad(true);
        const response = await api.get(`/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });
        const formattedCobrancas = response.data.map((item) => ({
          ...item,
          due_date: format(new Date(item.due_date), "dd/MM/yyyy"),
        }));
        console.log(response);
        setCobrancas(formattedCobrancas);
        setRemovedLoad(false);
      } catch (error) {
        console.log(error);
        setRemovedLoad(false);
      }
    }

    getCobrancas();
  }, []);
  if (removeLoad) {
    return <Loading />;
  }
  return (
    <div
      className={`${
        pathname === "/cobrancas"
          ? "container-full-table"
          : "container-resume-table"
      }`}
    >
      <table className="full-table">
        {pathname !== "/cobrancas" && (
          <caption>
            <div>
              <div>
                <h2> Cobraças do cliente</h2>
              </div>
              <div>
                <button
                  onClick={handleOpen}
                  type="button"
                  className="btn-large"
                >
                  + Nova cobrança
                </button>
              </div>
            </div>
          </caption>
        )}
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
          {cobrancas.map((item) => (
            <tr key={item.id}>
              {pathname === "/cobrancas" && <td>{item.client_name}</td>}
              <td>
                <span>{item.id}</span>
              </td>
              <td>{item.value}</td>
              <td>{item.due_date}</td>
              <td>
                <span
                  className={`status-cell ${
                    item.status === "Pendente"
                      ? "status-pendente"
                      : item.status === "Paga"
                      ? "status-paga"
                      : "status-outro"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td title={item.description}>{item.description}</td>

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
