import { Col, Radio, Row, Tabs } from 'antd';
import Column from 'antd/lib/table/Column';
import { useState } from 'react';
import { CompCardMeuUsuario } from '../CompCardMeuUsuario/CompCardMeuUsuario';

const { TabPane } = Tabs;

export const CompMeuUsuario = () => {
  const [mode, setMode] = useState('left');

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
          height: 220,
          marginLeft: '5%'
        }}
      >
        {<TabPane tab={'Perfil'} key={1}>
            <Row>
                {<Col span={24}>
                    <CompCardMeuUsuario/>
                </Col>} 
            </Row>
        </TabPane>}
        {<TabPane tab={'Lista de Funkos'} key={2}>
            Salve
        </TabPane>}
      </Tabs>
    </div>
  );
};