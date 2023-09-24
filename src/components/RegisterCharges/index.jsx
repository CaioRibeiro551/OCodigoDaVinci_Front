import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import clients from "../../assets/clients.svg";
import { useState } from "react";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingBtn from "../LoadingInput";
import LoadingBtnWhite from "../../components/LoadingBtnWhite";
import { ValidationCharges } from "../../validation/ValidiationCharges";

export default function RegisterCharges({ name, handleOpen, id }) {
  const { userLog } = useMainContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationCharges),
  });

  const onSubmit = async (data) => {
    try {
      setRemovedLoadBtn(false);
      await Api.post(`/clients/${id}/charges`, data, {
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

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className="closer"
          src={CloseModal}
          alt="Close"
          onClick={handleOpen}
        />
        <div className="container-title">
          <img src={clients} alt="icon client" />
          <h1>Cadastro de Cobrança</h1>
        </div>

        <div className="container-inputs">
          <label htmlFor="name">Nome *</label>
          <input type="text" name="name" defaultValue={name} disabled />
        </div>

        <div className="container-inputs-2">
          <label htmlFor="description">Descrição *</label>
          <textarea
            id="description"
            cols="20"
            rows="5"
            placeholder="Escreva a descrição aqui"
            {...register("description")}
          />
          {errors.description && (
            <span className="error">{errors.description.message}</span>
          )}
        </div>

        <div className="container-cpf-telefone">
          <div className="container-inputs">
            <label htmlFor="date">Vencimento *</label>
            <input
              className=" input-description"
              type="date"
              {...register("due_date")}
              placeholder="Data de Vencimento"
            />
            {errors.due_date && (
              <span className="error">{errors.due_date.message}</span>
            )}
          </div>
          <div className="container-inputs">
            <label htmlFor="value">Valor*</label>
            <input
              type="text"
              {...register("value")}
              placeholder="Digite o Valor"
            />
            {errors.due_date && (
              <span className="error">{errors.due_date.message}</span>
            )}
          </div>
        </div>
        <div className="radio-buttons ">
          <div className="flex">
            <input
              type="radio"
              value="Paga"
              id="status-paga"
              checked
              {...register("status")}
            />
            <label htmlFor="status-paga">Cobrança Paga</label>
          </div>
          <div className="flex">
            <input
              type="radio"
              value="Pendente"
              id="status-pendente"
              {...register("status")}
            />
            <label htmlFor="status-pendente">Cobrança Pendente</label>
          </div>
        </div>
        <div className="buttons-submit">
          <button className="btn-cancel" type="button" onClick={handleOpen}>
            Cancelar
          </button>

          <button>Aplicar</button>
        </div>
      </form>
    </div>
  );
}
