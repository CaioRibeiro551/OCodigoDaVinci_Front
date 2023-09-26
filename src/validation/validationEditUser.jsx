import * as yup from "yup";

export const validationEditUser = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  newPassword: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  password: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "As senhas não coincidem"),
});
