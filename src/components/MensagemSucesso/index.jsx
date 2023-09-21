import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import CheckMensage from "../../assets/check-mensage.svg";
import Close from "../../assets/close.svg";
import { useEffect } from "react";

export default function MensagemSucesso() {
  const { setMessageSucessAddClient } = useMainContext();
  const closeMessage = setTimeout(() => setMessageSucessAddClient(false), 5000);

  const handleCloserMessage = () => {
    clearTimeout(closeMessage);
    setMessageSucessAddClient(false);
    return;
  };

  useEffect(() => {
    closeMessage;
  }, []);
  return (
    <>
      <div className="container-mensage">
        <div className="mensage-item">
          <img src={CheckMensage} alt="Close" onClick={handleCloserMessage} />
          <p>Cadastro concluído com sucesso</p>
          <img className="close" src={Close} alt="" />
        </div>
      </div>
    </>
  );
}
