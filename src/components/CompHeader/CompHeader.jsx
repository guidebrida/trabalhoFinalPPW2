import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

export const CompHeader = () => {
  const options = [
    {
      label: <Link to="/CadastroFunko">Cadastrar novo</Link>,
      key: 'cadastroFunko'
    },
    { label: <Link to="/Loja">Loja de Funkos</Link>, key: 'lojaFunkos' },
    { label: <Link to="/CadastroUsuario">Novo Usuario</Link>, key: 'novoUsuario' }
  ];

  return <Menu mode="horizontal" items={options} />;
};
