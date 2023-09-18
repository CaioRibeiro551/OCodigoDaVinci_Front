import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import clients from "../../assets/clients.svg";

export default function ModalClients() {
  const { setModalClients } = useMainContext();

  const handleCloseModal = () => {
    setModalClients(false);
  };

  return (
    <>
      <div className="backdrop">
        <form>
          <img src={CloseModal} alt="Close" onClick={handleCloseModal} />
          <img src={clients} alt="" />
          <h1>Cadastro do cliente</h1>

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
              <label htmlFor="CPF">CPF*</label>
              <input type="cpf" name="cpf" placeholder="Digite seu CPF" />
            </div>
            <div className="container-inputs">
              <label htmlFor="telefone">Telefone*</label>
              <input
                type="text"
                name="telefone"
                placeholder="Digite seu telefone"
              />
            </div>
          </div>
          <div className="container-inputs">
            <label htmlFor="email">Endereço</label>
            <input
              type="text"
              name="endereco"
              placeholder="Digite seu endereço"
            />
          </div>
          <div className="container-inputs">
            <label htmlFor="complemento">Complemento</label>
            <input
              type="text"
              name="complemento"
              placeholder="Digite seu complemento"
            />
          </div>
          <div className="container-cep-bairro">
            <div className="container-inputs">
              <label htmlFor="email">CEP</label>
              <input type="text" name="CEP" placeholder="Digite seu CEP" />
            </div>
            <div className="container-inputs">
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                name="bairro"
                placeholder="Digite seu bairro"
              />
            </div>
          </div>
          <div className="container-cidade-uf">
            <div className="container-inputs">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                name="cidade"
                placeholder="Digite sua cidade"
              />
            </div>
            <div className="container-inputs">
              <label htmlFor="UF">UF</label>
              <input type="text" name="uf" placeholder="Digite a UF" />
            </div>
          </div>
          <div className="buttons-submit">
            <span>
              <button type="button" onClick={handleCloseModal}>
                Cancelar
              </button>
            </span>
            <button>Atualizar</button>
          </div>
        </form>
      </div>
    </>
  );
}
