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

export default function RegisterCharges() {
  const { userLog } = useMainContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(""),
  });

  const onSubmit = async (data) => {
    // try {
    //   setRemovedLoadBtn(false);
    //   await Api.post("/clients", data, {
    //     headers: {
    //       Authorization: userLog.token,
    //     },
    //   });
    //   setRemovedLoadBtn(true);
    //   setMessageSucessAddClient(true);
    //   handleCloseModal();
    //   return;
    // } catch (error) {
    //   setRemovedLoadBtn(true);
    //   alert(error.response.data.message);
    //   console.log(error.response.data);
    //   return;
    // }
  };

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className="closer"
          src={CloseModal}
          alt="Close"
          //   onClick={handleCloseModal}
        />
        <div className="container-title">
          <img src={clients} alt="icon client" />
          <h1>Cadastro de Cobrança</h1>
        </div>

        <div className={`container-inputs `}>
          <label htmlFor="name">Nome *</label>
          <input type="text" {...register("name")} />
          {/* {errors.name && <span>{errors.name.message}</span>} */}
        </div>

        <div className={`container-inputs`}>
          <label htmlFor="description">Descrição *</label>
          <input
            type="text"
            {...register("description")}
            placeholder="Digite a descrição"
          />
          {/* {errors.email && (
            <span className="erros-inputs">{errors.email.message}</span>
          )} */}
        </div>

        <div className="container-cpf-telefone">
          <div className={`container-inputs `}>
            <label htmlFor="date">Vencimento *</label>
            <input
              className=" input-description"
              type="date"
              {...register("due_date")}
              placeholder="Data de Vencimento"
            />
            {/* {errors.email && (
              <span className="erros-inputs">{errors.email.message}</span>
            )} */}
          </div>
          <div className={`container-inputs`}>
            <label htmlFor="value">Valor*</label>
            <input
              type="text"
              {...register("value")}
              placeholder="Digite o Valor"
            />
            {/* {errors.email && (
              <span className="erros-inputs">{errors.email.message}</span>
            )} */}
          </div>
        </div>

        <div className="buttons-submit">
          <button
            className="btn-cancel"
            type="button"
            // onClick={handleCloseModal}
          >
            Cancelar
          </button>

          <button>Aplicar</button>
        </div>
      </form>
    </div>
  );
}
