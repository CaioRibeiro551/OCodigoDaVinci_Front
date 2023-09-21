import './style.css';
import iconeEdit from '../../assets/icone-edit.svg';
import iconeExcluir from '../../assets/excluir.svg';
import iconeCobranca from '../../assets/cobranca-icon.svg';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { dadosCobrancas } from '../../utils/data';

export default function FullTableCobranca({}) {
  const [dadosAPI, setDadosAPI] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const response = await api.get('URL_DA_API');
        setDadosAPI(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    }

    fetchDataFromAPI();
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
          {dadosCobrancas.map((item, index) => (
            <tr key={index}>
              <td>{item.cliente}</td>
              <td>{item.idCob}</td>
              <td>{item.valor}</td>
              <td>{item.dataVencimento}</td>
              <td>{item.status}</td>
              <td>{item.descricao}</td>

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
