import "./style.css";
import Charge from "../../assets/cobranca.svg";
import iconOrdem from "../../assets/cobranca-icon.svg";

export default function FullTable({ lista }) {
  console.log(lista);
  return (
    <div className="container-full-table">
      <table className="full-table">
        <thead className="relative-text">
          <tr>
            <th>
              <img src={iconOrdem} alt="" />
              Cliente
            </th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Criar Cobranças</th>
          </tr>
        </thead>
        <tbody className="small-text ">
          {lista.map((item) => (
            <tr className="font-roboto font-tr line" key={item.id}>
              <td>{item.name}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.status}</td>
              <td>
                <a className="link-table" href="#">
                  <img src={Charge} alt="" />
                  <span>Criar cobrança</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
