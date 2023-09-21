import { Link } from "react-router-dom";
import "./style.css";

export default function ResumeTable({ item }) {
  return (
    <>
      <table className="resume-table ">
        <caption
          className={`${
            item.Width === "small" ? "table-small" : "table-large"
          } teste-2`}
        >
          {item.Imagem ? <img src={item.Imagem} alt="" /> : ""} {item.Title}
          <span
            style={{
              color: item.NumColor,
              backgroundColor: item.BkColor,
            }}
          >
            08
          </span>
        </caption>
        <thead className="relative-text">
          <tr>
            <th>{item.Clients}</th>
            <th>{item.ID}</th>
            <th>{item.Valor}</th>
          </tr>
        </thead>

        <tbody className="small-text">
          <tr>
            <td>Sara Silva</td>
            <td>223456787</td>
            <td>{item.Width === "small" ? "R$ 700,00" : "123456789101"}</td>
          </tr>
          <tr>
            <td>Carlos Prado</td>
            <td>223456781</td>
            <td>{item.Width === "small" ? "R$ 700,00" : "123456789101"}</td>
          </tr>
          <tr>
            <td>Lara Brito</td>
            <td>223456781</td>
            <td>{item.Width === "small" ? "R$ 700,00" : "123456789101"}</td>
          </tr>
          <tr>
            <td>Soraia Neves</td>
            <td>223456787</td>
            <td>{item.Width === "small" ? "R$ 700,00" : "123456789101"}</td>
          </tr>
        </tbody>

        <tfoot className="">
          <tr key="3">
            <td />
            <td className="bottom-table">
              <Link to={"/clients"}>Ver todos</Link>
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    </>
  );
}
