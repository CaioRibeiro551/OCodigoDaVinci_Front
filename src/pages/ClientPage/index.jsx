import FullTable from "../../components/FullTable";
import Header from "../../components/Header";
import MenuTableClients from "../../components/MenuTableClients";
import Sidebar from "../../components/Sidebar";
import { FullTableHeader } from "../../utils/data";
import "./style.css";

export default function ClientsPage() {
  return (
    <div className="container-clients">
      <Sidebar />
      <Header />
      <div className="main-page-client id">
        <MenuTableClients />
        {FullTableHeader.map((item, index) => (
          <FullTable item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
