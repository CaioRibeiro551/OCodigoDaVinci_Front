import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import CheckMensage from "../../assets/check-mensage.svg";
import Close from "../../assets/close.svg";
import { useEffect } from "react";

export default function MensagemFlash({ msg }) {
  const { setMessageFlash } = useMainContext();
  const closeMessage = setTimeout(() => setMessageFlash(false), 5000);

  const close = () => {
    setMessageFlash(false);
    clearTimeout(closeMessage);
    return;
  };

  useEffect(() => {
    closeMessage;
  }, []);
  return (
    <>
      <div className="container-mensage-flash">
        <div className="mensage-item">
          {/* <img src={CheckMensage} alt="info" /> */}
          <p>{msg}</p>
          <img className="close" src={Close} alt="close" onClick={close} />
        </div>
      </div>
    </>
  );
}
