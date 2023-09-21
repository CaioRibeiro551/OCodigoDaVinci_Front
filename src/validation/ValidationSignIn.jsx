import * as yup from "yup";

export const validationSignIn = yup.object().shape({
  email: yup
    .string()
    .required("Email é um campo obrigatório")
    .min(8, "Email deve ter no mínimo 8 caracteres")
    .email("Formato de email inválido")
    .transform((email) => email.toLowerCase()),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});
