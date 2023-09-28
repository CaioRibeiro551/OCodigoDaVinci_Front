import './style.css';
import { useMainContext } from '../../hooks/useMainContext';
import Attention from '../../assets/attention-icon.svg';
import Close from '../../assets/close.svg';
import { useEffect } from 'react';

export default function MensagemExcluirCobranca() {
  const { setMessageSucessUpdateUser } = useMainContext();
  const closeMessage = setTimeout(
    () => setMessageSucessUpdateUser(false),
    5000,
  );

  const close = () => {
    setMessageSucessUpdateUser(false);
    clearTimeout(closeMessage);
    return;
  };

  useEffect(() => {
    closeMessage;
  }, []);
  return (
    <>
      <div className="container-mensage-sucess-up-user" onClick={close}>
        <span className="close">
          <img src={Close} alt="" />
        </span>
        <div className="mensage-item-sucess">
          <img className="sucess" src={Attention} alt="close" />

          <p>Tem certeza que deseja excluir esta cobrança? </p>
          <span className="confirmation-buttons">
            <button>Não</button>
            <button>Sim</button>
          </span>
        </div>
      </div>
    </>
  );
}
