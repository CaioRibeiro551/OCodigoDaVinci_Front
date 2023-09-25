import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CloseModal from '../../assets/close.svg';
import { useMainContext } from '../../hooks/useMainContext';
import api from '../../services/api';
import { validationEditUser } from '../../validation/validationEditUser';
import LoadButton from '../../components/LoadButton/';

export default function Modal() {
  const { setModalTeste, userLog, setUserLog } = useMainContext();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationEditUser),
    defaultValues: {
      name: userLog.name || '',
      email: userLog.email || '',
      cpf: userLog.cpf || '',
      phone: userLog.phone || '',
      newPassword: '',
      password: '',
    },
  });

  const handleCloseModal = () => {
    setModalTeste(false);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.patch('/update-me', data, {
        headers: {
          Authorization: userLog.token,
        },
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError('root', {
        serverError: {
          type: error.response.status,
          message: error.response.data.message,
        },
      });
    }

    const validateFormData = async (data) => {
      try {
        await Axios.post('/validate-email', {
          email: data.email,
        });

        setStepIndex(stepIndex + 1);
      } catch (error) {
        setError('root', {
          serverError: {
            type: error.response.status,
            message: 'O email já está cadastrado',
          },
        });
      }
    };

    const userUpdat = {
      name: userLog.name || data.name,
      email: userLog.email || data.email,
      cpf: userLog.cpf || data.cpf,
      phone: userLog.phone || data.phone,
    };
  };

  return (
    <>
      <div className="backdrop">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={CloseModal} alt="Close" onClick={handleCloseModal} />
          <h1>Adicione seus dados</h1>

          <div className="container-inputs">
            <label htmlFor="name">Nome *</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input type="text" {...field} placeholder="Digite seu nome" />
              )}
            />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </div>

          <div className="container-inputs">
            <label htmlFor="email">E-mail *</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input type="text" {...field} placeholder="Digite seu email" />
              )}
            />
            {errors.email ? (
              <span className="error">{errors.email?.message}</span>
            ) : (
              errors?.root?.serverError?.type && (
                <span className="error">
                  {errors.root.serverError?.message}
                </span>
              )
            )}
          </div>

          <div className="container-cpf-telefone">
            <div className="container-inputs">
              <label htmlFor="cpf">CPF</label>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <input type="text" {...field} placeholder="Digite seu CPF" />
                )}
              />
              {errors.cpf && (
                <span className="error">{errors.cpf.message}</span>
              )}
            </div>
            <div className="container-inputs">
              <label htmlFor="telefone">Telefone</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    placeholder="Digite seu telefone"
                  />
                )}
              />
              {errors.phone && (
                <span className="error">{errors.phone.message}</span>
              )}
            </div>
          </div>

          <div className="container-inputs">
            <label htmlFor="newPassword">Nova senha</label>
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  placeholder="Digite sua nova senha"
                />
              )}
            />
            {errors.newPassword && (
              <span className="error">{errors.newPassword.message}</span>
            )}
          </div>

          <div className="container-inputs">
            <label htmlFor="password">Confirmar senha</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  placeholder="Confirme sua senha"
                />
              )}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            {isLoading && <LoadButton />}
            Atualizar
          </button>
        </form>
      </div>
    </>
  );
}
