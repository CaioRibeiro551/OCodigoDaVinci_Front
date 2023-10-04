import './style.css';
import CloseModal from '../../assets/close.svg';
import { useMainContext } from '../../hooks/useMainContext';
import clients from '../../assets/clients.svg';
import Api from '../../services/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoadingBtn from '../LoadingInput';
import LoadingBtnWhite from '../../components/LoadingBtnWhite';
import { ValidationCharges } from '../../validation/ValidiationCharges';
import ReactInputMask from 'react-input-mask';

export default function ModalEditCharges({
  id,
  client,
  handleOpen,
  handleEditCharge,
}) {
  const { userLog } = useMainContext();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationCharges),
  });

  const onSubmit = async (data) => {
    const newCharge = { ...data, id };
    console.log(id);
    try {
      await Api.put(`/charges/${id}`, newCharge, {
        headers: {
          Authorization: userLog.token,
        },
      });

      handleEditCharge();
    } catch (error) {
      console.error(error);
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
          <h1>Edição de Cobrança</h1>
        </div>

        <div className="container-inputs">
          <label htmlFor="name">Nome *</label>
          <input type="text" name="name" defaultValue={client.name} disabled />
        </div>

        <div className="container-inputs-2">
          <label htmlFor="description">Descrição *</label>
          <textarea
            id="description"
            cols="20"
            rows="5"
            placeholder="Escreva a descrição aqui"
            {...register('description')}
            defaultValue={client.description}
          />
          {errors.description && (
            <span className="error">{errors.description.message}</span>
          )}
        </div>

        <div className="container-cpf-telefone">
          <div className="container-inputs">
            <label htmlFor="due_date">Vencimento *</label>
            <ReactInputMask
              className=" input-description"
              mask="99/99/9999"
              placeholder="Data de Vencimento"
              {...register('due_date')}
              defaultValue={client.due_date}
            />
            {errors.due_date && (
              <span className="error">{errors.due_date?.message}</span>
            )}
          </div>
          <div className="container-inputs">
            <label htmlFor="value">Valor*</label>
            <input
              type="text"
              placeholder="Digite o Valor"
              {...register('value')}
              defaultValue={client.value}
            />
            {errors.value && (
              <span className="error">{errors.value.message}</span>
            )}
          </div>
        </div>
        <div className="radio-buttons">
          <div className="flex">
            <input
              type="radio"
              value="Paga"
              id="status-paga"
              {...register('status')}
              defaultChecked={client.status === 'Paga'}
            />
            <label htmlFor="status-paga">Cobrança Paga</label>
          </div>
          <div className="flex">
            <input
              type="radio"
              value="Pendente"
              id="status-pendente"
              {...register('status')}
              defaultChecked={client.status === 'Pendente'}
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
