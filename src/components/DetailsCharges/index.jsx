import "./style.css";
import ChargeIcon from "../../assets/charge.svg";
import CloseIcon from "../../assets/close.svg";

export default function DetailsCharges({ charge, setOpenDetails }) {
  return (
    <div className="container-details-charges">
      <div className="content-details-charges">
        <img
          className="img-details-close"
          src={CloseIcon}
          alt="Close"
          onClick={() => {
            setOpenDetails(false);
          }}
        />
        <div className="details-charge-title">
          <img className="img-details-charges" src={ChargeIcon} alt="Charge" />
          <h1>Detalhe da cobrança</h1>
        </div>

        <div className="container-topics">
          <div className="content-topics">
            <h3>Nome</h3>
            <span>{charge.client_name}</span>
          </div>

          <div className="content-topics">
            <h3>Descrição</h3>
            <p>{charge.description}</p>
          </div>

          <div className="container-topics-venc-valor">
            <div className="content-topics">
              <h3>Vencimento</h3>
              <span>{charge.due_date}</span>
            </div>
            <div className="content-topics">
              <h3>Valor</h3>
              <span>{charge.value}</span>
            </div>
          </div>

          <div className="container-topics-id-status">
            <div className="content-topics">
              <h3>ID Cobranças</h3>
              <span>{charge.id}</span>
            </div>
            <div className="content-topics">
              <h3>Status</h3>
              <span
                className={`status-cell ${
                  charge.status === "Pendente"
                    ? "pendente"
                    : charge.status === "Paga"
                    ? "paga"
                    : charge.status === "Vencida"
                    ? "vencida"
                    : "status-outro"
                }`}
              >
                {charge.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
