import FullTable from '../../components/FullTable';
import Header from '../../components/Header';
import MenuTableClients from '../../components/MenuTableClients';
import Sidebar from '../../components/Sidebar';
import { clients } from '../../utils/data';
import './style.css';
import ModalClients from '../../components/ModalClients';
import MenuTableCobranca from '../../components/MenuTableCobranca';
import FullTableCobranca from '../../components/FullTableCobranca';
import { useMainContext } from '../../hooks/useMainContext';
import { useState } from 'react';

export default function CobrancaPage() {
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
    <div className="container-cobrancas">
      <Sidebar />
      <Header />
      <div className="main-page-cobrancas">
        <MenuTableCobranca />
        <FullTableCobranca lista={lista} />
      </div>
      {modalClients && <ModalClients />}
    </div>
  );
}
