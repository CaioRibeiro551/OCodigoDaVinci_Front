import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
import eyeOpen from "../../assets/eye-open.png";
import eyeClose from "../../assets/eye-close.png";
import Sucess from "../../assets/sucess.svg";
import Confirm from "../../assets/confirm-step.svg";
import Active from "../../assets/active-step.svg";
import StopSet from "../../assets/stop-step.svg";
import Axios from "../../services/Api";

export default function SignUp() {
  const [stepIndex, setStepIndex] = useState(0);
  const [imgStep2, setImgStep2] = useState(StopSet);
  const [imgStep3, setImgStep3] = useState(StopSet);
  const [eye, setEye] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigator = useNavigate();

  const stepImg = () => {
    if (stepIndex === 1) {
      setImgStep2(Active);
    }
    if (stepIndex === 2) {
      setImgStep2(Confirm);
      setImgStep3(Confirm);
    }
    if (stepIndex === 3) {
      setImgStep3(Confirm);
    }
  };

  const handleSetUser = ({ target }) => {
    const key = target.name;
    const value = target.value;
    setUser({ ...user, [key]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (stepIndex === 1) {
      if (!user.password || !user.confirmPassword) {
        alert("Preencha todos os campos!");
        return;
      }
      if (user.password !== user.confirmPassword) {
        alert("As senhas precisam ser iguais!");
        return;
      }
    }

    setStepIndex(stepIndex + 1);
    stepImg();
    return;
  };

  const handleValidEmail = async () => {
    try {
      if (!user.name || !user.email) {
        alert("Preencha todos os campos!");
        return;
      }
      const response = await Axios.post("/validate-email", user.email);

      handleNext();
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const newUser = {
        name: user.name,
        email: user.email,
        password: user.password,
      };
      const response = await Axios.post("/signup", newUser);

      navigator("/");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    stepImg();
  }, [stepIndex]);

  return (
    <div className="signup-container max-width">
      <div className="signup-container-left">
        <div className="container-stepper">
          <div className="container-step">
            <div className="container-step-title">
              <img src={stepIndex === 0 ? Active : Confirm} />
              <span className="title-stepl">Cadastre-se</span>
            </div>

            <span className="description">
              Por favor, escreva seu nome e e-mail
            </span>
          </div>

          <div className="container-step">
            <div className="container-step-title">
              <img src={imgStep2} />
              <span className="title-stepl">Escolha uma senha</span>
            </div>
            <span className="description">Escolha uma senha segura</span>
          </div>

          <div className="container-step">
            <div className="container-step-title">
              <img src={imgStep3} />
              <span className="title-stepl">
                Cadastro realizado com sucesso
              </span>
            </div>
            <span className="description">
              E-mail e senha cadastrados com sucesso
            </span>
          </div>
        </div>
      </div>

      <div className="signup-container-rigth">
        <>
          {stepIndex === 0 && (
            <form action="">
              <h1>Adicione seus dados</h1>

              <div className="container-inputs">
                <label htmlFor="name">Nome *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleSetUser}
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="container-inputs">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleSetUser}
                  placeholder="Digite seu email"
                />
              </div>

              <button type="button" onClick={handleValidEmail}>
                Continuar
              </button>

              <p>
                Já possui uma conta? Faça seu <Link to="/"> Login</Link>
              </p>
            </form>
          )}

          {stepIndex === 1 && (
            <div>
              <form action="">
                <h1>Escolha uma senha</h1>

                <div className="container-inputs">
                  <label htmlFor="password">Senha *</label>
                  <input
                    type={eye ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleSetUser}
                    placeholder="Digite seu senha"
                  />
                  <div className="password-toggle" onClick={() => setEye(!eye)}>
                    {eye ? <img src={eyeOpen} /> : <img src={eyeClose} />}
                  </div>
                </div>

                <div className="container-inputs">
                  <label htmlFor="confirmPassword">Repita a senha *</label>
                  <input
                    type={eye ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={handleSetUser}
                    placeholder="Repita a senha"
                  />
                  <div className="password-toggle" onClick={() => setEye(!eye)}>
                    {eye ? <img src={eyeOpen} /> : <img src={eyeClose} />}
                  </div>
                </div>

                <button type="button" onClick={handleNext}>
                  Finalizar cadastro
                </button>
                <p>
                  Já possui uma conta? Faça seu <Link to="/"> Login</Link>
                </p>
              </form>
            </div>
          )}

          {stepIndex === 2 && (
            <div className="container-finish">
              <div className="finish">
                <img src={Sucess} alt="finish" />
                <h2>Cadastro realizado com sucesso</h2>
              </div>

              <button onClick={handleSubmit}>Ir para o login</button>
            </div>
          )}
        </>

        <div className="container-highlighter">
          <div
            className={`highlighter ${stepIndex === 0 && "highlighter-active"}`}
          ></div>
          <div
            className={`highlighter ${stepIndex === 1 && "highlighter-active"}`}
          ></div>
          <div
            className={`highlighter ${stepIndex === 2 && "highlighter-active"}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
