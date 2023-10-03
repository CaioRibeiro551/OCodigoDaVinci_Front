import './style.css';
import LoadBtnIcon from '../../components/LoadButton';

export default function LoadingInput() {
  return (
    <div className="container-load-input">
      <img className="img-load-input" src={LoadBtnIcon} alt="loading" />
    </div>
  );
}
