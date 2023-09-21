import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import clients from "../../assets/clients.svg";
import { useState } from "react";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationAddClient } from "../../validation/validationAddClient";

export default function ModalClients() {
  const { setModalClients, userLog } = useMainContext();
  const [form, setForm] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationAddClient),
  });

  console.log(errors);

  const createrUser = (data) => {
    setForm({ ...data });
    console.log({
      ...data,
    });
    return;
  };

  const handleCloseModal = () => {
    setModalClients(false);
  };

  // const hadleOnSubmit = async () => {
  //   try {
  //     const response = await Api.post("/clients", form, {
  //       headers: {
  //         Authorization: userLog.token,
  //       },
  //     });

  //     alert("Cliente cadastrado com sucesso!");
  //     console.log(response);
  //     handleCloseModal();
  //     return;
  //   } catch (error) {
  //     cconsole.log(error);
  //     return;
  //   }
  // };

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit(createrUser)}>
        <img src={CloseModal} alt="Close" onClick={handleCloseModal} />
        <img src={clients} alt="" />
        <h1>Cadastro do cliente</h1>

        <div
          className={`container-inputs ${errors.name ? "erros-inputs" : ""}`}
        >
          <label htmlFor="nome">Nome *</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Digite seu nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div
          className={`container-inputs ${errors.name ? "erros-inputs" : ""}`}
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
            className={`container-inputs ${errors.name ? "erros-inputs" : ""}`}
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
            className={`container-inputs ${errors.name ? "erros-inputs" : ""}`}
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
              placeholder="Digite seu CEP"
            />
          </div>
          <div className="container-inputs">
            <label htmlFor="neighborhood">Bairro</label>
            <input
              type="text"
              id="neighborhood"
              {...register("neighborhood")}
              placeholder="Digite seu bairro"
            />
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
            />
          </div>
          <div className="container-inputs">
            <label htmlFor="uf">UF</label>
            <input
              type="text"
              id="uf"
              {...register("uf")}
              placeholder="Digite a UF"
            />
          </div>
        </div>
        <div className="buttons-submit">
          <span>
            <button type="button" onClick={handleCloseModal}>
              Cancelar
            </button>
          </span>
          <button>
            {/* type="button" onClick={hadleOnSubmit} */}
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
}
