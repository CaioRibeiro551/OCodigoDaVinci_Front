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

  const handleNext = () => {
    if (activeStep === 0) {
      if (!user.name.trim() || !user.email.trim()) {
        msgError("Os campos Nome e Email são obrigatórios!");
        return;
      }
    }

    if (activeStep === 1) {
      if (!user.password.trim() || !user.confirmPassword.trim()) {
        msgError("Os campos de Senha e Repertir senha são obrigatórios!");
        return;
      }

      if (user.password.trim() !== user.confirmPassword.trim()) {
        msgError("As senhas precisam ser iguais!");
        return;
      }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleSetuser = ({ target }) => {
    const key = target.name;
    const value = target.value;
    setUser({ ...user, [key]: value });
    console.log(user);
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
                  onChange={handleSetuser}
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="container-inputs">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleSetuser}
                  placeholder="Digite seu email"
                />
              </div>

              <button type="button" onClick={handleNext}>
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
                    onChange={handleSetuser}
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
                    onChange={handleSetuser}
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

              <button onClick={() => navigator("/signin")}>
                Ir para o login
              </button>
            </div>
          )}
        </>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <div>
          <Box display="flex" justifyContent="center" mt={3}>
            {steps.map((_, index) => (
              <Box
                key={index}
                width={50}
                height={5}
                bgcolor={index <= activeStep ? "success.main" : "grey.400"}
                ml={index > 0 ? 2 : 0}
              />
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}
