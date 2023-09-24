import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../services/api";
import { useMainContext } from "../../hooks/useMainContext";
import { useForm } from "react-hook-form";
import { validationSignIn } from "../../validation/ValidationSignIn";
import { yupResolver } from "@hookform/resolvers/yup";
import MessageFlash from "../../components/MensageFlash";

export default function SignIn() {
  const [text, setText] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSignIn),
  });

  const navigate = useNavigate();

  const { setUserLog, messageFlash, setMessageFlash } = useMainContext();

  async function onSubmit(data) {
    try {
      const responde = await Axios.post("/login", data);
      setUserLog({
        id: responde.data.id,
        name: responde.data.name,
        token: responde.data.token,
      });
      navigate("/home");
    } catch (error) {
      setMessageFlash(true);
      setText(error.response.data.message);
      console.error(error.response.data.message);
    }
  }

  return (
    <div className="signin-container">
      <div className="signin-container-left"></div>
      <div className="box-sing-in">
        <div className="signin-container-rigth">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Faça seu login!</h1>
            <div className="container-inputs">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email && (
                <span className="error">{errors.email?.message}</span>
              )}
            </div>
            <div className="container-inputs">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && (
                <span className="error">{errors.password?.message}</span>
              )}
            </div>
            <button type="submit">Entrar</button>

            <p>
              Ainda não possui conta?<Link to="/signup"> Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
      {messageFlash && <MessageFlash msg={text} />}
    </div>
  );
}
