import './style.css';
import { useMainContext } from '../../hooks/useMainContext';
import Attention from '../../assets/attention-icon.svg';
import Close from '../../assets/close.svg';
import { useEffect } from 'react';
import api from '../../services/api';

export default function MensagemExcluirCobranca({
  currentCobrancas,
  setCobrancas,
  cobrancas,
}) {
  const { setCobrancaExcluir, userLog } = useMainContext();

  const handleDeleteCobranca = async () => {
    try {
      await api.delete(`/charges/${currentCobrancas.id}`, {
        headers: { Authorization: `Bearer ${userLog.token}` },
      });

      setCobrancas(cobrancas.filter((item) => item.id !== currentCobrancas.id));
      setCobrancaExcluir(false);
      handleClose();
    } catch (error) {
      console.error('Erro ao excluir a cobrança', error);
    }
  };

  const handleClose = () => {
    setCobrancaExcluir(false);
    return;
  };

  return (
    <>
      <div className="container-mensage-sucess-up-user" onClick={close}>
        <span className="close">
          <img onClick={handleClose} src={Close} alt="" />
        </span>
        <div className="mensage-item-sucess">
          <img
            onClick={handleClose}
            className="sucess"
            src={Attention}
            alt="close"
          />

          {currentCobrancas.status === 'Pendente' ? (
            <p>Tem certeza que deseja excluir esta cobrança? </p>
          ) : (
            <p>Essa cobrança não pode ser excluída</p>
          )}
          <span className="confirmation-buttons">
            {currentCobrancas.status === 'Pendente' && (
              <button onClick={handleClose}>Não</button>
            )}
            {currentCobrancas.status === 'Pendente' && (
              <button onClick={handleDeleteCobranca}>Sim</button>
            )}
          </span>
        </div>
      </div>
    </>
  );
}
