import './style.css';
import { useMainContext } from '../../hooks/useMainContext';
import Attention from '../../assets/attention-icon.svg';
import Close from '../../assets/close.svg';
import { useEffect } from 'react';
import api from '../../services/api';

export default function MensagemExcluirCobranca({
  currentIdCobranca,
  setCobrancas,
  cobrancas,
}) {
  const { setCobrancaExcluir, userLog } = useMainContext();

  const handleDeleteCobranca = async () => {
    console.log(currentIdCobranca);
    try {
      await api.delete(`/charges/${currentIdCobranca}`, {
        headers: { Authorization: `Bearer ${userLog.token}` },
      });
      console.log(cobrancas);
      setCobrancas(cobrancas.filter((item) => item.id !== currentIdCobranca));
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
          <img src={Close} alt="" />
        </span>
        <div className="mensage-item-sucess">
          <img
            onClick={handleClose}
            className="sucess"
            src={Attention}
            alt="close"
          />

          <p>Tem certeza que deseja excluir esta cobrança? </p>
          <span className="confirmation-buttons">
            <button onClick={handleClose}>Não</button>
            <button onClick={handleDeleteCobranca}>Sim</button>
          </span>
        </div>
      </div>
    </>
  );
}
