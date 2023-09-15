import { useState } from "react";
import { Link } from "react-router-dom";
import { Stepper, Step, StepLabel, Box, StepContent } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";
import eyeOpen from "../../assets/eye-open.png";
import eyeClose from "../../assets/eye-close.png";
import Sucess from "../../assets/sucess.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  StepContent,
  Typography,
} from '@mui/material';
import './style.css';
import { useNavigate } from 'react-router-dom';

import Sucess from '../../assets/sucess.svg';

const steps = [
  {
    label: 'Cadastre-se',
    description: `Por favor, escreva seu nome e e-mail`,
  },
  {
    label: 'Escolha uma senha',
    description: 'Escolha uma senha segura',
  },
  {
    label: 'Cadastro realizado com sucesso',
    description: `E-mail e senha cadastradoscom sucesso`,
  },
];

export default function SignUp() {
  const [activeStep, setActiveStep] = useState(0);
  const [eye, setEye] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const msgError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

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

  return (
    <div className="signup-container max-width">
      <div className="signup-container-left">
        <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label) => (
              <Step key={label.label}>
                <StepLabel>
                  <span className="titleStepper">{label.label}</span>
                </StepLabel>
                <StepContent TransitionProps={{ unmountOnExit: false }}>
                  <span className="descriptionStepper">
                    {label.description}
                  </span>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>

      <div className="signup-container-rigth">
        <>
          {activeStep === 0 && (
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

          {activeStep === 1 && (
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
                    type={eye ? 'text' : 'password'}
                    name="Senha"

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

                    type={eye ? 'text' : 'password'}
                    name="repeteSenha"

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

          {activeStep === 2 && (
            <div className="container-finish">
              <div className="finish">
                <img src={Sucess} alt="finish" />
                <h2>Cadastro realizado com sucesso</h2>
              </div>

              <button onClick={() => navigator('/signin')}>
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
                bgcolor={index <= activeStep ? 'success.main' : 'grey.400'}
                ml={index > 0 ? 2 : 0}
              />
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
}
