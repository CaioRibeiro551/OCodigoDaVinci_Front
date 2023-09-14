import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
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
              type="password"
              name="senha"
              placeholder="Digite sua senha"
            />
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
