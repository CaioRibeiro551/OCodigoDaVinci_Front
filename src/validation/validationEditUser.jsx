import * as yup from "yup";

export const validationEditUser = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  phone: yup.string(),
  newPassword: yup.string(),
  password: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "As senhas não coincidem"),
});
