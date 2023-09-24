import "./style.css";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeExcluir from "../../assets/excluir.svg";
import iconeCobranca from "../../assets/cobranca-icon.svg";
import { useLocation } from "react-router-dom";

export default function FullTableCobranca({ cobrancas }) {
  let { pathname } = useLocation();

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
            {pathname === "/cobrancas" && (
              <th>
                <img src={iconeCobranca} alt="" />
                Cliente
              </th>
            )}
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
