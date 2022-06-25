import { Col, Radio, Row, Tabs } from 'antd';
import Column from 'antd/lib/table/Column';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { CompCardMeuUsuario } from '../CompCardMeuUsuario/CompCardMeuUsuario';
import { CompFormFunko } from '../CompFormFunko/CompFormFunko';
import { CompFunkoCard } from '../CompFunkoCard/CompFunkoCard';

const { TabPane } = Tabs;

export const CompMeuUsuario = () => {
  const [usuario, setUsuario] = useState(null)
     useEffect(() => {
          const pegarUsuario = async () => {
            const { data } = await axios.get("http://localhost:5000/api/usuario/62b3a8b87991ed0682350e7d")
            setUsuario(data);
          }
          pegarUsuario();
     }, [])
     console.log(usuario)
  const [mode, setMode] = useState('left');

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <>
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
            <CompCardMeuUsuario nome={usuario?.nome} user={usuario?.user} senha={usuario?.senha}/>
        </TabPane>}
        {<TabPane tab={'Lista de Funkos'} key={2}>
          <Row>
            {usuario?.funkos?.map((item) => (
              <CompFunkoCard key={item._id}  url={item.url} descricao={item.descricao} valor={item.valor} />
            ))}
          </Row>  
        </TabPane>}
      </Tabs>
    </div>
    </>
  );
};