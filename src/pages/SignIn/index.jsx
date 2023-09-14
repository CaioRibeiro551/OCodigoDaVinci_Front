import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function SignIn() {
  const [eye, setEye] = useState(false);
  const navigator = useNavigate();

  return (
    <div className="signin-container">
      <div className="signin-container-left"></div>
      <div className="signin-container-rigth">
        <form action="">
          <h1>Faça seu login!</h1>

          <div className="container-inputs">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite seu email" />
          </div>

          <div className="container-inputs">
            <label htmlFor="senha">Senha</label>
            <input
              type={eye ? "text" : "password"}
              name="senha"
              placeholder="Digite sua senha"
            />
            <div className="password-toggle" onClick={() => setEye(!eye)}>
              {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>

          <button onClick={() => navigator("/home")}>Entrar</button>
          <p>
            Ainda não possui conta?<Link to="/signup"> Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
