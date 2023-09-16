import './style.css';
import '../../styles/index.css';

export default function Table() {
  return (
    <>
      <div className="table-container">
        <div className="top-table">
          <h1>
            Cobranças Vencidas
            <span className="badge">08</span>
          </h1>
        </div>
        <div className="main-table">
          <table>
            <thead>
              <tr>
                <th>Clientes</th>
                <th>ID da Cob.</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sara Silva</td>
                <td>223456787</td>
                <td>R$ 1000,00</td>
              </tr>
              <tr>
                <td>Carlos Prado</td>
                <td>223456781</td>
                <td>R$ 400,00</td>
              </tr>
              <tr>
                <td>Lara Brito</td>
                <td>223456781</td>
                <td>R$ 900,00</td>
              </tr>
              <tr>
                <td>Soraia Neves</td>
                <td>223456787</td>
                <td>R$ 700,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bottom-table">
          <a href="">Ver todos</a>
        </div>
      </div>
    </>
  );
}
