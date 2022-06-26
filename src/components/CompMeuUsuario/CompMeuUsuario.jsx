import { Col, Radio, Row, Tabs } from 'antd';
import Column from 'antd/lib/table/Column';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import LoginContext from '../../context/ContextLogin';
import { CompCardCadastroFunko } from '../CompCardCadastroFunko/CompCardCadastroFunko';
import { CompCardListaDeFunkos } from '../CompCardListaDeFunkos/CompCardListaDeFunkos';
import { CompCardMeuUsuario } from '../CompCardMeuUsuario/CompCardMeuUsuario';


const { TabPane } = Tabs;

export const CompMeuUsuario = () => {
  const {login} = useContext(LoginContext)
  const [usuario, setUsuario] = useState(null)
     useEffect(() => {
          const pegarUsuario = async () => {
            {console.log(login)}
            const { data } = await axios.get(`http://localhost:5000/api/usuario/${login.id}`)
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
              <CompCardListaDeFunkos key={item._id}  url={item.url} descricao={item.descricao} valor={item.valor} sale={item.sale}/>
            ))}
          </Row>  
        </TabPane>}
        {<TabPane tab={'Cadastrar Funko'} key={3}>
              <CompCardCadastroFunko/>
        </TabPane>}
      </Tabs>
    </div>
    </>
  );
};