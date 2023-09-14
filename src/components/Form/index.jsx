import "./style.css";

export default function Form() {
  return (
    <form action="">
      <h1>Adicione seus dados</h1>

      <div className="container-inputs">
        <label htmlFor="nome">Nome *</label>
        <input type="text" name="nome" placeholder="Digite seu nome" />
      </div>

      <div className="container-inputs">
        <label htmlFor="email">E-mail *</label>
        <input type="email" name="email" placeholder="Digite seu email" />
      </div>
    </form>
  );
}
