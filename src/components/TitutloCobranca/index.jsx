import "./style.css";

export default function TituloCobranca({ item }) {
  return (
    <>
      <div
        className="container-information"
        style={{
          backgroundColor: item.color,
          borderRadius: "30px",
          marginBottom: "24px",
        }}
      >
        <div className="container-information-content">
          <img className="image-information" src={item.img} alt="" />
          <div className="text-content">
            <h1>{item.text}</h1>
            <p>{item.valor}</p>
          </div>
        </div>
      </div>
    </>
  );
}
