import FullTable from '../../components/FullTable';
import Header from '../../components/Header';
import MenuTableClients from '../../components/MenuTableClients';
import Sidebar from '../../components/Sidebar';
import { clients } from '../../utils/data';
import './style.css';
import ModalClients from '../../components/ModalClients';
import { useMainContext } from '../../hooks/useMainContext';
import { useState } from 'react';

export default function ClientsPage() {
  const { modalClients } = useMainContext();

  const [lista, setLista] = useState(clients);
  const [novoItem, setNovoItem] = useState('');

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      const novaLista = [...lista, novoItem];
      setLista(novaLista);
      setNovoItem('');
    }
  };
  return (
    <div className="container-clients">
      <Sidebar />
      <Header />
      <div className="main-page-client ">
        <MenuTableClients />
        <FullTable lista={lista} />
      </div>
      {modalClients && <ModalClients />}
    </div>
  );
}
