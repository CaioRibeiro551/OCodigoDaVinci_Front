import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../../services/api';
import '../../components/LoadButton';

import { useMainContext } from '../../hooks/useMainContext';
import LoadButton from '../../components/LoadButton';

export default function SignIn() {
  const [removeLoad, setremoveLoad] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const { userLog, setUserLog } = useMainContext();

  const navigator = useNavigate();

  const handleSetuser = ({ target }) => {
    const key = target.name;
    const value = target.value;
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async () => {
    const loginUser = {
      email: user.email,
      password: user.password,
    };

    try {
      if (!loginUser.email || !loginUser.password) {
        alert('campos email e senha são obrigatórios!');
        return;
      }
      setremoveLoad(false);
      const response = await Axios.post('/login', loginUser);
      setremoveLoad(true);

      setUserLog(response.data);

      navigator('/home');
    } catch (error) {
      setremoveLoad(true);
      setError(error.response.data.message);

      return;
    }

    return;
  };

  // useEffect(() => {
  //   if (userLog && userLog.token) {
  //     navigator("/");
  //   }
  // }, []);

  return (
    <div className="signin-container">
      <div className="signin-container-left"></div>
      <div className="box-sing-in">
        <div className="signin-container-rigth">
          <form>
            <h1>Faça seu login!</h1>

            <div className="container-inputs">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                onChange={handleSetuser}
              />
            </div>

            <div className="container-inputs">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleSetuser}
                placeholder="Digite sua senha"
              />
              {error && <span className="error">{error}</span>}
            </div>

            <button type="button" onClick={handleSubmit}>
              {!removeLoad ? <LoadButton /> : 'Entrar'}
            </button>
            <p>
              Ainda não possui conta?<Link to="/signup"> Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
