import "./style.css";
import Charge from "../../assets/cobranca.svg";

export default function FullTable({ item }) {
  return (
    <div className="container-full-table">
      <table className="full-table table ">
        <thead className="relative-text">
          <tr className="font-roboto-bold font-tr">
            <th>{item.Clients}</th>
            <th>{item.CPF}</th>
            <th>{item.Email}</th>
            <th>{item.Phone}</th>
            <th>{item.Status}</th>
            <th>{item.CreateCharges}</th>
          </tr>
        </thead>
        <tbody className="small-text ">
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>

            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Claudia M. Sousa</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>
            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>João Santos</td>
            <td>123456789101</td>
            <td>joao@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>
            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Pedro Henrique</td>
            <td>123456789101</td>
            <td>pedro.henrque@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>
            <td>
              <a className="link-table " href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>

          <tr className="font-roboto font-tr line">
            <td>Marina Tavares</td>
            <td>123456789101</td>
            <td>marina_tavares@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>
            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Daniel Lopes</td>
            <td>123456789101</td>
            <td>daniel.lopes@cubos.academy</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>
            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
          <tr className="font-roboto font-tr line">
            <td>Guido Cerqueira</td>
            <td>123456789101</td>
            <td>claudia@teste.com.br</td>
            <td>(99)9999-9999</td>
            <td>Inadimplente</td>
            <td>
              <a className="link-table" href="">
                <img src={Charge} alt="" />
                <span>Criar cobrança</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
