import { useEffect, useState } from 'react';
import './style.css';
import pagas from '../../assets/icone-pagas.svg';
import vencidas from '../../assets/icone-vencidas.svg';
import previstas from '../../assets/icone-previstas.svg';

export default function TituloCobranca({ tipo, valor }) {
  const [imagem, setImagem] = useState(0);
  const [title, setTitle] = useState('');
  const [background, setBackground] = useState('');

  useEffect(() => {
    if (tipo === 'pagas') {
      setImagem(pagas);
      setTitle('cobranças pagas');
      setBackground('card-pagas');
      return;
    }
    if (tipo === 'vencidas') {
      setImagem(vencidas);
      setTitle('cobranças vencidas');
      setBackground('card-vencidas');
      return;
    }
    if (tipo === 'previstas') {
      setImagem(previstas);
      setTitle('cobranças previstas');
      setBackground('card-previstas');
      return;
    }
  }, []);
  return (
    <>
      <div className={`container-information ${background}`}>
        <div className="container-information-content">
          <img className="image-information" src={imagem} alt="" />
          <div className="text-content">
            <h1>{title}</h1>
            <p>{valor}</p>
          </div>
        </div>
      </div>
    </>
  );
}
