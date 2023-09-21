import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import clients from "../../assets/clients.svg";
import { useState } from "react";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationAddClient } from "../../validation/validationAddClient";
import axios from "axios";
import LoadingBtn from "../LoadingInput";
import LoadingBtnWhite from "../../components/LoadingBtnWhite";

export default function ModalClients() {
  const { setModalClients, userLog, setMessageSucessAddClient } =
    useMainContext();
  const [form, setForm] = useState({
    neighborhood: "",
    city: "",
    state: "",
  });
  const [removeLoad, setRemovedLoad] = useState(true);
  const [removeLoadBtn, setRemovedLoadBtn] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationAddClient),
  });

  const createrUser = async (data) => {
    try {
      setRemovedLoadBtn(false);
      await Api.post("/clients", data, {
        headers: {
          Authorization: userLog.token,
        },
      });
      setRemovedLoadBtn(true);
      setMessageSucessAddClient(true);

      handleCloseModal();
      return;
    } catch (error) {
      setRemovedLoadBtn(true);
      alert(error.response.data.message);
      console.log(error.response.data);
      return;
    }
  };

  const handleBuscaCep = async ({ target }) => {
    try {
      setRemovedLoad(false);
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${target.value}/json/`
      );
      console.log(data);
      setRemovedLoad(true);

      setForm({
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      });
      return;
    } catch (error) {
      setRemovedLoad(true);
      return console.log(error);
    }
  };

  const handleCloseModal = () => {
    setModalClients(false);
    return;
  };

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit(createrUser)}>
        <img
          className="closer"
          src={CloseModal}
          alt="Close"
          onClick={handleCloseModal}
        />
        <div className="container-title">
          <img src={clients} alt="icon client" />
          <h1>Cadastro do cliente</h1>
        </div>

        <div
          className={`container-inputs ${errors.name ? "erros-inputs" : ""}`}
        >
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Digite seu nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div
          className={`container-inputs ${errors.email ? "erros-inputs" : ""}`}
        >
          <label htmlFor="email">E-mail *</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
          />
          {errors.email && (
            <span className="erros-inputs">{errors.email.message}</span>
          )}
        </div>

        <div className="container-cpf-telefone">
          <div
            className={`container-inputs ${errors.cpf ? "erros-inputs" : ""}`}
          >
            <label htmlFor="cpf">CPF*</label>
            <input
              type="cpf"
              id="cpf"
              {...register("cpf")}
              placeholder="Digite seu CPF"
            />
            {errors.email && (
              <span className="erros-inputs">{errors.email.message}</span>
            )}
          </div>
          <div
            className={`container-inputs ${errors.phone ? "erros-inputs" : ""}`}
          >
            <label htmlFor="phone">Telefone*</label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="Digite seu telefone"
            />
            {errors.email && (
              <span className="erros-inputs">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="container-inputs">
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            {...register("address")}
            placeholder="Digite seu endereço"
          />
        </div>
        <div className="container-inputs">
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            id="complement"
            {...register("complement")}
            placeholder="Digite seu complemento"
          />
        </div>
        <div className="container-cep-bairro">
          <div className="container-inputs">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              {...register("cep")}
              onBlur={handleBuscaCep}
              placeholder="Digite seu CEP"
            />
          </div>
          <div className="container-inputs">
            <label htmlFor="neighborhood">Bairro</label>
            <input
              type="text"
              id="neighborhood"
              {...register("neighborhood")}
              value={form.neighborhood}
              placeholder="Digite seu bairro"
            />
            {!removeLoad && <LoadingBtn />}
          </div>
        </div>
        <div className="container-cidade-uf">
          <div className="container-inputs">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              value={form.city}
              {...register("city")}
              placeholder="Digite sua cidade"
            />
            {!removeLoad && <LoadingBtn />}
          </div>
          <div className="container-inputs">
            <label htmlFor="state">UF</label>
            <input
              type="text"
              id="state"
              value={form.state}
              {...register("state")}
              placeholder="Digite a UF"
            />
            {!removeLoad && <LoadingBtn />}
          </div>
        </div>
        <div className="buttons-submit">
          <button
            className="btn-cancel"
            type="button"
            onClick={handleCloseModal}
          >
            Cancelar
          </button>

          <button>{!removeLoadBtn ? <LoadingBtnWhite /> : "Aplicar"}</button>
        </div>
      </form>
    </div>
  );
}
