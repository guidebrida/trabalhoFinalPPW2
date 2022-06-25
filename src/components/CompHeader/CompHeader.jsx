import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

export const CompHeader = () => {
  const options = [
    { label: <Link to="/MeuUsuario">Meu Usuário</Link>,key: 'meuUsuario'},
    { label: <Link to="/Loja">Loja de Funkos</Link>, key: 'lojaFunkos' },
    { label: <Link to="/login">Login</Link>, key: 'Login' }
  ];

  return <Menu mode="horizontal" items={options} />;
};
