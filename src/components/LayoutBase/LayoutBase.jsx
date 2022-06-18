import { Col, Layout, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import { CompFotter } from '../CompFotter/CompFotter';
import { CompHeader } from '../CompHeader/CompHeader';

export const LayoutBase = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header>
        <CompHeader />
      </Layout.Header>
      <Layout.Content style={{ marginTop: 50 }}>
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        <CompFotter />
      </Layout.Footer>
    </Layout>
  );
};
