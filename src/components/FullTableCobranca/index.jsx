import './style.css';
import iconeEdit from '../../assets/icone-edit.svg';
import iconeExcluir from '../../assets/excluir.svg';
import iconeCobranca from '../../assets/cobranca-icon.svg';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import Loading from '../../components/LoadingPage';
import DetailsCharges from '../DetailsCharges';
import MenssagemConfirm from '../../components/MensageExcluirCobranca'; // Certifique-se de usar o nome correto do componente
import { useMainContext } from '../../hooks/useMainContext';

export default function FullTableCobranca({
  cobrancas,
  handleOpen,
  setCobrancas,
}) {
  const { pathname } = useLocation();
  const [detailsItem, setDetailsItem] = useState({});
  const [openDetails, setOpenDetails] = useState(false);
  const [currentIdCobranca, setcurrentIdCobranca] = useState(null);
  const { userLog, cobrancaExcluir, setCobrancaExcluir } = useMainContext();

  const handleExibirModal = (id) => {
    setcurrentIdCobranca(id);
    setCobrancaExcluir(true);
    return;
  };

  const OpenDetailsCharge = (e, item) => {
    const valid = e.target.classList;

    if (
      valid[0] === 'icon-item' ||
      valid[0] === 'delete' ||
      valid[0] === 'edit'
    ) {
      return;
    }
    setDetailsItem(item);
    setOpenDetails(true);
    return;
  };
  useEffect(() => {}, [cobrancaExcluir]);
  return (
    <div
      className={`${
        pathname === '/cobrancas'
          ? 'container-full-table'
          : 'container-resume-table'
      }`}
    >
      <table className="full-table">
        {pathname !== '/cobrancas' && (
          <caption>
            <div>
              <div>
                <h2> Cobraças do cliente</h2>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleOpen}
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
            <tr key={item.id} onClick={(e) => OpenDetailsCharge(e, item)}>
              {pathname === '/cobrancas' && <td>{item.client_name}</td>}

              <td>
                <span>{item.id}</span>
              </td>
              <td>{item.value}</td>
              <td>{item.due_date}</td>
              <td>
                <span
                  className={`status-cell ${
                    item.status === 'Pendente'
                      ? 'pendente'
                      : item.status === 'Paga'
                      ? 'paga'
                      : item.status === 'Vencida'
                      ? 'vencida'
                      : 'status-outro'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td title={item.description}>{item.description}</td>

              <td className="icon-item">
                <p className="edit">
                  <img className="edit" src={iconeEdit} alt="Editar" />
                  <span className="edit">Editar </span>
                </p>
                <p
                  className="delete"
                  onClick={() => handleExibirModal(item.id)}
                >
                  <img className="delete" src={iconeExcluir} alt="Excluir" />
                  <span className="delete">Excluir </span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openDetails && (
        <DetailsCharges charge={detailsItem} setOpenDetails={setOpenDetails} />
      )}

      {cobrancaExcluir && (
        <MenssagemConfirm
          currentIdCobranca={currentIdCobranca}
          setCobrancas={setCobrancas}
          cobrancas={cobrancas}
        />
      )}
    </div>
  );
}
