import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './style.css';
import ModalClients from '../../components/ModalClients';
import MenuTableCobranca from '../../components/MenuTableCobranca';
import FullTableCobranca from '../../components/FullTableCobranca';
import { useMainContext } from '../../hooks/useMainContext';
import { useState, useEffect } from 'react';

import api from '../../services/api';
import { format } from 'date-fns';
import Loading from '../../components/LoadingPage';

export default function CobrancaPage() {
  const { modalClients, userLog, handleOpen } = useMainContext();
  const title = 'Cobranças';

  const [cobrancas, setCobrancas] = useState([]);
  const [removeLoad, setRemovedLoad] = useState(true);

  useEffect(() => {
    async function getCobrancas() {
      try {
        setRemovedLoad(true);
        const response = await api.get(`/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });
        const formattedCobrancas = response.data.map((item) => ({
          ...item,
          due_date: format(new Date(item.due_date), 'dd/MM/yyyy'),
        }));
        setCobrancas(formattedCobrancas);
        setRemovedLoad(false);
      } catch (error) {
        console.log(error);
        setRemovedLoad(false);
      }
    }

    getCobrancas();
  }, []);
  if (removeLoad) {
    return <Loading />;
  }

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <main className="container-clients">
          <MenuTableCobranca />
          <FullTableCobranca
            cobrancas={cobrancas}
            handleOpen={handleOpen}
            setCobrancas={setCobrancas}
          />
        </main>

        {modalClients && <ModalClients />}
      </div>
    </div>
  );
}
