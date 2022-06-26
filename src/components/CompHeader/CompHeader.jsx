import { Breadcrumb, Button, Layout, Menu } from 'antd';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../../context/ContextLogin';
const { Header, Content } = Layout;

export const CompHeader = () => {
  const {login, setLogin} = useContext(LoginContext)
  const logout = () =>{
    setLogin(null)
  }
  const options = [
    { label: <Link to="/MeuUsuario">Meu Usuário</Link>,key: 'meuUsuario'},
    { label: <Link to="/Loja">Loja de Funkos</Link>, key: 'lojaFunkos' },
    { label: login ? <Button type='link' onClick={logout}>Logout</Button> :  <Link to="/login">Login</Link>, key: 'Login' }
  ];
  

  return <Menu mode="horizontal" items={options} />;
};
