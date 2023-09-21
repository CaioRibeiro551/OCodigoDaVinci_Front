import * as yup from "yup";

export const validationSignUp = yup.object().shape({
  name: yup
    .string()
    .required("O campo nome é obrigatório")
    .matches(/^[A-Za-z\s]+$/, "Digite apenas letras no campo de nome")
    .transform((originalValue) => {
      if (originalValue.trim() === "") {
        return;
      }
      return originalValue
        .trim()
        .split(" ")
        .map((letra) => {
          return letra[0].toUpperCase().concat(letra.substring(1));
        })
        .join(" ");
    }),
  email: yup
    .string()
    .required("Email é um campo obrigatório")
    .min(8, "Email deve ter no mínimo 8 caracteres")
    .email("Formato de email inválido")
    .transform((email) => email.toLowerCase()),
});

export const validationPasswordSignUp = yup.object().shape({
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("A repetição da senha é obrigatória.")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});
