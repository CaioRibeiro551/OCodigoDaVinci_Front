import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import IconClients from "../../assets/clients.svg";
import { useEffect, useState } from "react";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import LoadingBtn from "../LoadingInput";
import LoadingBtnWhite from "../../components/LoadingBtnWhite";
import MensagemFlash from "../../components/MensageFlash";
import { validationEditClient } from "../../validation/validationEditClient ";

export default function ModalEditClients({ id, client }) {
  const {
    userLog,
    setMessageSucessAddClient,
    messageFlash,
    setMessageFlash,
    handleOpenEdith,
  } = useMainContext();

  const [text, setText] = useState(false);
  const [form, setForm] = useState({});

  const [removeLoad, setRemovedLoad] = useState(true);
  const [removeLoadBtn, setRemovedLoadBtn] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEditClient),
    defaultValues: {
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
      complemet: client.complemet,
      cep: client.cep.replace(/\s+/g, ""),
    },
  });

  function removerSimbolosDeObjeto(obj) {
    if (typeof obj === "string") {
      return obj.replace(/[^\wÀ-ÿç\s]/g, "");
    }

    if (typeof obj === "object" && obj !== null) {
      for (let key in obj) {
        obj[key] = removerSimbolosDeObjeto(obj[key]);
      }
    }

    return obj;
  }

  const createrUser = async (data) => {
    const newForm = removerSimbolosDeObjeto(form);

    const newData = {
      ...data,
      ...newForm,
    };

    try {
      setRemovedLoadBtn(false);
      await Api.patch(`clients/${id}`, newData, {
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
      return;
    }

    if (target.value.trim().length !== 8) {
      setText("CEP deve conter 8 dígitos");
      setMessageFlash(true);
      return;
    }
    console.log(target.value.trim());
    teste(target.value);
  };

  const teste = async (item) => {
    if (item || client.cpf) {
      try {
        setRemovedLoad(false);
        const { data } = await Api.get(`/cep/${!item ? client.cep : item}`, {
          headers: {
            Authorization: userLog.token,
          },
        });

        setRemovedLoad(true);
        setForm(data);

        return;
      } catch (error) {
        setRemovedLoad(true);
        setText(error.response.data.message);
        setMessageFlash(true);
        return;
      }
    }
    return;
  };

  useEffect(() => {
    teste();
  }, []);

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
          <h1>Editar Cliente</h1>
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
            defaultValue={
              client.address !== form.address ? form.address : client.address
            }
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
              placeholder="Digite seu bairro"
              defaultValue={
                client.neighborhood !== form.neighborhood
                  ? form.neighborhood
                  : client.neighborhood
              }
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
              placeholder="Digite sua cidade"
              defaultValue={client.city !== form.city ? form.city : client.city}
            />

            {!removeLoad && <LoadingBtn />}
          </div>

          <div className="container-inputs">
            <label htmlFor="state">UF</label>
            <input
              type="text"
              id="state"
              {...register("state")}
              placeholder="Digite a UF"
              defaultValue={
                client.state !== form.state ? form.state : client.state
              }
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
