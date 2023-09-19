import * as yup from "yup";

export const validationPost = yup
  .object()
  .shape({
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
      .email("Formato de email invalido")
      .transform((email) => email.toLowerCase()),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  })
  .required();
