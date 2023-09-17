import FullTable from "../../components/FullTable";
import { FullTableHeader } from "../../utils/data";
import "./style.css";

export default function ClientsPage() {
  return (
    <div className="main-page-client">
      {FullTableHeader.map((item, index) => (
        <FullTable item={item} key={index} />
      ))}
    </div>
  );
}
