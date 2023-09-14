import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  StepContent,
  Typography,
} from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Sucess from "../../assets/sucess.svg";

function SignIn() {
  const [activeStep, setActiveStep] = useState(0);
  const [eye, setEye] = useState(false);

  const navigator = useNavigate();
  const steps = [
    {
      label: "Cadastre-se",
      description: `Por favor, escreva seu nome e e-mail`,
    },
    {
      label: "Escolha uma senha",
      description: "Escolha uma senha segura",
    },
    {
      label: "Cadastro realizado com sucesso",
      description: `E-mail e senha cadastradoscom sucesso`,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="signup-container">
      <div className="signup-container-left">
        <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label) => (
              <Step key={label.label}>
                <StepLabel>{label.label} </StepLabel>
                <StepContent>
                  <Typography>{label.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>

      <div className="signup-container-rigth">
        <form>
          {activeStep === 0 && (
            <div>
              <form action="">
                <h1>Adicione seus dados</h1>

                <div className="container-inputs">
                  <label htmlFor="name">Nome *</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className="container-inputs">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                  />
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Próximo
                </Button>
                <Link to="/signin">Já possui uma conta? Faça seu Login</Link>
              </form>
            </div>
          )}

          {activeStep === 1 && (
            <div>
              <form action="">
                <h1>Escolha uma senha</h1>

                <div className="container-inputs">
                  <label htmlFor="senha">Senha *</label>
                  <input
                    type={eye ? "text" : "password"}
                    name="Senha"
                    placeholder="Digite seu senha"
                  />
                  <div className="password-toggle" onClick={() => setEye(!eye)}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>

                <div className="container-inputs">
                  <label htmlFor="repeteSenha">Repita a senha *</label>
                  <input
                    type={eye ? "text" : "password"}
                    name="repeteSenha"
                    placeholder="Repita a senha"
                  />
                  <div className="password-toggle" onClick={() => setEye(!eye)}>
                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Próximo
                </Button>
                <Link to="/signin">Já possui uma conta? Faça seu Login</Link>
              </form>
            </div>
          )}

          {activeStep === 2 && (
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
        </form>
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

export default SignIn;
