import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../services/api";

import { useMainContext } from "../../hooks/useMainContext";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { userLog, setUserLog } = useMainContext();

  const navigator = useNavigate();

  const handleSetuser = ({ target }) => {
    const key = target.name;
    const value = target.value;
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async () => {
    const loginUser = {
      email: user.email,
      password: user.password,
    };

    try {
      if (!loginUser.email || !loginUser.password) {
        alert("campos email e senha são obrigatórios!");
        return;
      }

      const response = await Axios.post("/login", loginUser);

      setUserLog(response.data);

      navigator("/home");
    } catch (error) {
      setError(error.response.data.message);

      return;
    }

    return;
  };

  // useEffect(() => {
  //   if (userLog && userLog.token) {
  //     navigator("/");
  //   }
  // }, []);

  return (
    <div className="signin-container">
      <div className="signin-container-left"></div>
      <div className="box-sing-in">
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
              {error && <span className="error">{error}</span>}
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
    </div>
  );
}
