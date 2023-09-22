import './style.css';
import iconeEdit from '../../assets/icone-edit.svg';
import iconeExcluir from '../../assets/excluir.svg';
import iconeCobranca from '../../assets/cobranca-icon.svg';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { dadosCobrancas } from '../../utils/data';
import { useMainContext } from '../../hooks/useMainContext';

export default function FullTableCobranca({}) {
  const [cobrancas, setCobrancas] = useState([]);
  const [removeLoad, setRemovedLoad] = useState(true);
  const { userLog } = useMainContext();
  useEffect(() => {
    async function getCobrancas() {
      try {
        setRemovedLoad(true);
        const response = await api.get(`/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });

        console.log(response);
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
    <div className="container-full-table">
      <table className="full-table-2 table">
        <thead className="relative-text">
          <tr>
            <th>
              {' '}
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
              <td>{item.client_id}</td>
              <td>{item.id}</td>
              <td>{item.value}</td>
              <td>{item.due_date}</td>
              <td>{item.status}</td>
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
