import "./style.css";
import paidcharge from "../../assets/paid-charges.svg";

export default function TituloCobranca() {
  return (
    <>
      <div className="container-information">
        <div className="container-information-content">
          <img className="image-information" src={paidcharge} alt="" />
          <div className="text-content">
            <h1>Cobranças pagas</h1>
            <p>R$30.000</p>
          </div>
        </div>
      </div>
    </>
  );
}
