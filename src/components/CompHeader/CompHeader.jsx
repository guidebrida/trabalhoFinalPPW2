import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content } = Layout;

export const CompHeader = () => (
  <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" />
      <Menu  mode="horizontal">
        <Menu.Item>
      Cadastrar novo
       </Menu.Item>
       <Menu.Item>
      Loja De Funkos
       </Menu.Item>
       <Menu.Item>
      Novo Usuario
       </Menu.Item>
    </Menu>
    </Header>
  </Layout>
);
