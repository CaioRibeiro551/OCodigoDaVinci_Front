import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import { useEffect, useState } from "react";
import Axios from "../../services/api";

export default function Modal() {
  const { setModalTeste, userLog, setUserLog } = useMainContext();
  const [form, setForm] = useState({
    name: userLog.name,
    email: userLog.email,
    cpf: userLog.cpf,
    phone: userLog.phone,
  });
  const [currentDados, setCurrentDados] = useState({});

  const handleChange = ({ target }) => {
    const key = target.name;
    const value = target.value;
    setCurrentDados({ ...form, [key]: value });
    return;
  };

  const handleCloseModal = () => {
    setModalTeste(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await Axios.patch("/update-me", form, {
        headers: {
          Authorization: userLog.token,
        },
      });
      alert("Usuário atualizado com sucesso!");
      const userUpdat = {
        name: userLog.name || form.name,
        email: userLog.email || form.email,
        cpf: userLog.cpf || form.cpf,
        phone: userLog.phone || form.phone,
      };
      setUserLog({ ...userLog, ...userUpdat });
      handleCloseModal();
      return;
    } catch (error) {
      alert(error.response.data.message);
      return;
    }
  };

  useEffect(() => {
    setForm(currentDados);
  }, [currentDados]);

  return (
    <>
      <div className="backdrop">
        <form>
          <img src={CloseModal} alt="Close" onClick={handleCloseModal} />
          <h1>Adicione seus dados</h1>

          <div className="container-inputs">
            <label htmlFor="nome">Nome *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </div>

          <div className="container-inputs">
            <label htmlFor="email">E-mail *</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu email"
            />
          </div>

          <div className="container-cpf-telefone">
            <div className="container-inputs">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
                placeholder="Digite seu CPF"
              />
            </div>
            <div className="container-inputs">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
              />
            </div>
          </div>
          <div className="container-inputs">
            <label htmlFor="newPassword">Nova senha</label>
            <input
              type="password"
              name="newPassword"
              onChange={handleChange}
              placeholder="Digite sua senha"
            />
          </div>
          <div className="container-inputs">
            <label htmlFor="password">Confirmar senha</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Confirmar senha"
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Atualizar
          </button>
        </form>
      </div>
    </>
  );
}
