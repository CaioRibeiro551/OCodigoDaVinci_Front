import React, { useEffect, useState } from "react";
import eyeOpen from "../../assets/eye-open.png";
import eyeClose from "../../assets/eye-close.png";
import Sucess from "../../assets/sucess.svg";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationPost } from "../../validation";
import Axios from "../../services/api";

export default function FormSignUp({ stepIndex, setStepIndex }) {
  const [eye, setEye] = useState(false);
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  const validateFormData = async (data) => {
    try {
      await Axios.post("/validate-email", {
        email: data.email,
      });

      setValidationError("");
      setStepIndex(stepIndex + 1);
    } catch (error) {
      setValidationError(
        (error.response.data.message = "O e-mail já está em uso.")
      );
    }
  };

  const onSubmit = async (data) => {
    if (stepIndex < 2) {
      await validateFormData(data);
    } else {
      try {
        await Axios.post("/signup", data);
        navigate("/");
      } catch (error) {
        console.error();
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {stepIndex === 0 && (
          <>
            <h1>Adicione seus dados</h1>
            <div className="container-inputs">
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
            </div>
            <span className="error">{errors.name?.message}</span>
            <div className="container-inputs">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <span className="error">{errors.email?.message}</span>
            </div>
          </>
        )}

        {stepIndex === 1 && (
          <>
            <h1>Escolha uma senha</h1>
            <div className="container-inputs">
              <label htmlFor="password">Senha *</label>
              <input
                type={eye ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Digite seu senha"
                {...register("password")}
              />
              <span className="error">{errors.password?.message}</span>
              <div className="password-toggle" onClick={() => setEye(!eye)}>
                {eye ? <img src={eyeOpen} /> : <img src={eyeClose} />}
              </div>

              <div className="container-inputs">
                <label htmlFor="confirmPassword">Repita a senha *</label>
                <input
                  type={eye ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Repita a senha"
                  {...register("confirmPassword")}
                />
                <span className="errors">
                  <span className="error">
                    {errors.confirmPassword?.message}
                  </span>
                </span>
                <div className="password-toggle" onClick={() => setEye(!eye)}>
                  {eye ? <img src={eyeOpen} /> : <img src={eyeClose} />}
                </div>
              </div>
            </div>
          </>
        )}

        {stepIndex === 2 && <></>}
        {stepIndex < 2 && (
          <>
            <button>
              {stepIndex === 0 ? "Continuar" : "Finalizar Cadastro"}
            </button>

            <p>
              Já possui uma conta? Faça seu <Link to="/"> Login</Link>
            </p>
          </>
        )}
        {stepIndex >= 2 && (
          <div className="container-finish">
            <div className="finish">
              <img src={Sucess} alt="finish" />
              <h2>Cadastro realizado com sucesso</h2>
            </div>

            <button>Ir para o login</button>
          </div>
        )}
      </form>
    </>
  );
}
