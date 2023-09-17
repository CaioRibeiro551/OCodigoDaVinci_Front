import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";

export default function Modal() {
  const { setModalTeste } = useMainContext();

  const handleCloseModal = () => {
    setModalTeste(false);
  };

  return (
    <>
      <div className="backdrop">
        <form action="">
          <img src={CloseModal} alt="Close" onClick={handleCloseModal} />
          <h1>Adicione seus dados</h1>

          <div className="container-inputs">
            <label htmlFor="nome">Nome *</label>
            <input type="text" name="nome" placeholder="Digite seu nome" />
          </div>

          <div className="container-inputs">
            <label htmlFor="email">E-mail *</label>
            <input type="email" name="email" placeholder="Digite seu email" />
          </div>

          <div className="container-cpf-telefone">
            <div className="container-inputs">
              <label htmlFor="email">CPF</label>
              <input type="email" name="email" placeholder="Digite seu CPF" />
            </div>
            <div className="container-inputs">
              <label htmlFor="email">Telefone</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu telefone"
              />
            </div>
          </div>
          <div className="container-inputs">
            <label htmlFor="email">Nova senha</label>
            <input type="email" name="email" placeholder="Digite sua senha" />
          </div>
          <div className="container-inputs">
            <label htmlFor="email">Confirmar senha</label>
            <input type="email" name="email" placeholder="Confirmar senha" />
          </div>
          <button>Atualizar</button>
        </form>
      </div>
    </>
  );
}
