import { Card, Col, Row } from 'antd';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { CompFunkoCard } from '../CompFunkoCard/CompFunkoCard';

export const CompLoja = () => {
     const [funko, setFunko] = useState(null)
     useEffect(() => {
          const pegarFunkos = async () => {
               const { data } = await axios.get("http://localhost:5000/api/funko/")
               setFunko(data);
          }
          pegarFunkos();
     }, [])
     return (
          <>

               <Row>
               
                    {funko?.map((item) => (
                         <CompFunkoCard url={item.url} descricao={item.descricao} valor={item.valor}/>
                    ))}
              
               </Row>
          </>
     )
};
