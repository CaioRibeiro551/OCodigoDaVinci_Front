import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigator = useNavigate();

  const msgError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

//   const handleSetuser = ({ target }) => {
//     const key = target.name;
//     const value = target.value;
//     setUser({ ...user, [key]: value });
//   };

  const handleSubmit = () => {
    if (!user.email.trim()) {
      msgError("O campo e-mail é obrigatório!");
      return;
    }

    if (!user.password.trim()) {
      msgError("O campo senha é obrigatório!");
      return;
    }

//     navigator("/home");
//     return;
//   };

//   return (
//     <div className="signin-container max-width">
//       <div className="signin-container-left"></div>
//       <div className="signin-container-rigth">
//         <form>
//           <h1>Faça seu login!</h1>

//           <div className="container-inputs">
//             <label htmlFor="email">E-mail</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Digite seu email"
//               onChange={handleSetuser}
//             />
//           </div>

//           <div className="container-inputs">
//             <label htmlFor="password">Senha</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               onChange={handleSetuser}
//               placeholder="Digite sua senha"
//             />
//           </div>

          <button type="button" onClick={handleSubmit}>
            Entrar
          </button>
          <p>
            Ainda não possui conta?<Link to="/signup"> Cadastre-se</Link>
          </p>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
