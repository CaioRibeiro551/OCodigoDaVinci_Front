import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../services/api";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();

  const handleSetuser = ({ target }) => {
    const key = target.name;
    const value = target.value;
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async () => {
    const loginUser = {
      email: user.email,
      senha: user.password,
    };

    try {
      if (!loginUser.email || !loginUser.senha) {
        alert("campos email e senha são obrigatórios!");
        return;
      }

      await Axios.post("/login", loginUser);
      navigator("/home");
    } catch (error) {
      return alert(error.response.data);
    }

    return;
  };

  return (
    <div className="signin-container max-width">
      <div className="signin-container-left"></div>
      <div className="signin-container-rigth">
        <form>
          <h1>Faça seu login!</h1>

          <div className="container-inputs">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              onChange={handleSetuser}
            />
          </div>

          <div className="container-inputs">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleSetuser}
              placeholder="Digite sua senha"
            />
          </div>

          <button type="button" onClick={handleSubmit}>
            Entrar
          </button>
          <p>
            Ainda não possui conta?<Link to="/signup"> Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
