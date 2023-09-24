import * as yup from "yup";

export const ValidationCharges = yup.object().shape({
  description: yup.string().required("Este  campo deve ser preenchido"),
  due_date: yup.string().required("Este campo deve ser preenchido."),
  value: yup.number().required("Este  campo deve ser preenchido"),
});
