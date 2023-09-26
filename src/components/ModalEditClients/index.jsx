import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import IconClients from "../../assets/clients.svg";
import { useEffect, useState } from "react";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationAddClient } from "../../validation/validationAddClient";
import LoadingBtn from "../LoadingInput";
import LoadingBtnWhite from "../../components/LoadingBtnWhite";
import MensagemFlash from "../../components/MensageFlash";

export default function ModalEditClients({ id, client }) {
  const {
    userLog,
    setMessageSucessAddClient,
    messageFlash,
    setMessageFlash,
    handleOpenEdith,
  } = useMainContext();

  const [text, setText] = useState(false);
  const [form, setForm] = useState({
    cep: "",
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

  const handleChange = ({ target }) => {
    const key = target.name;
    const value = target.value;
    setForm({ ...form, [key]: value });
    console.log(form);
    return;
  };

  const createrUser = async (data) => {
    try {
      setRemovedLoadBtn(false);
      await Api.patch(`clients/${id}`, data, {
        headers: {
          Authorization: userLog.token,
        },
      });
      setRemovedLoadBtn(true);
      setMessageSucessAddClient(true);
      handleOpenEdith();
      return;
    } catch (error) {
      setRemovedLoadBtn(true);
      setText(error.response.data.message);
      setMessageFlash(true);
      return;
    }
  };

  const handleBuscaCep = async ({ target }) => {
    if (!target.value.trim()) {
      // setText("Digite um CEP");
      // setMessageFlash(true);
      return;
    }

    if (target.value.trim().length != 8) {
      setText("CEP deve conter 8 digitos");
      setMessageFlash(true);
      return;
    }

    try {
      setRemovedLoad(false);
      const { data } = await Api.get(`/cep/${target.value}`, {
        headers: {
          Authorization: userLog.token,
        },
      });
      setRemovedLoad(true);
      console.log(data);
      setForm({
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
      });
      return;
    } catch (error) {
      setRemovedLoad(true);
      console.log(error);
      setText(error.response.data.message);
      setMessageFlash(true);
      return;
    }
  };
  console.log(client);

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit(createrUser)}>
        <img
          className="closer"
          src={CloseModal}
          alt="Close"
          onClick={handleOpenEdith}
        />
        <div className="container-title">
          <img src={IconClients} alt="icon client" />
          <h1> Editar cliente</h1>
        </div>

        <div
          className={`container-inputs ${errors.name ? "erros-inputs" : ""}`}
        >
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            defaultValue={client.name}
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
            defaultValue={client.email}
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
              defaultValue={client.cpf}
            />
            {errors.cpf && (
              <span className="erros-inputs">{errors.cpf.message}</span>
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
              defaultValue={client.phone}
            />
            {errors.phone && (
              <span className="erros-inputs">{errors.phone.message}</span>
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
            defaultValue={client.address}
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
          <div
            className={`container-inputs ${errors.cep ? "erros-inputs" : ""}`}
          >
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              {...register("cep")}
              onBlur={handleBuscaCep}
              placeholder="Digite seu CEP"
              defaultValue={client.cep}
            />
            {errors.cep && (
              <span className="erros-inputs">{errors.cep.message}</span>
            )}
          </div>

          <div className="container-inputs">
            <label htmlFor="neighborhood">Bairro</label>
            <input
              type="text"
              id="neighborhood"
              {...register("neighborhood")}
              value={form.neighborhood}
              onChange={handleChange}
              placeholder="Digite seu bairro"
              defaultValue={client.neighborhood}
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
              {...register("city")}
              value={form.city}
              onChange={handleChange}
              placeholder="Digite sua cidade"
              defaultValue={client.city}
            />
            {!removeLoad && <LoadingBtn />}
          </div>

          <div className="container-inputs">
            <label htmlFor="state">UF</label>
            <input
              type="text"
              id="state"
              {...register("state")}
              value={form.state}
              onChange={handleChange}
              placeholder="Digite a UF"
              defaultValue={client.state}
            />
            {!removeLoad && <LoadingBtn />}
          </div>
        </div>

        <div className="buttons-submit">
          <button
            className="btn-cancel"
            type="button"
            onClick={handleOpenEdith}
          >
            Cancelar
          </button>

          <button>{!removeLoadBtn ? <LoadingBtnWhite /> : "Aplicar"}</button>
        </div>
      </form>

      {messageFlash && <MensagemFlash msg={text} />}
    </div>
  );
}
