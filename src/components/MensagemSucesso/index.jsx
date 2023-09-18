import './style.css';
import { useMainContext } from '../../hooks/useMainContext';
import CheckMensage from '../../assets/check-mensage.svg';
import Close from '../../assets/close.svg';

export default function MensagemSucesso() {
  return (
    <>
      <div className="container-mensage">
        <div className="mensage-item">
          <img src={CheckMensage} alt="" />
          <p>Cadastro concluído com sucesso</p>
          <img className="close" src={Close} alt="" />
        </div>
      </div>
    </>
  );
}
