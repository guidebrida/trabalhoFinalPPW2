import { Card, Col, Row,Dropdown,Menu } from 'antd';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { CompFunkoCard } from '../CompFunkoCard/CompFunkoCard';

export const CompLoja = () => {
     const [funko, setFunko] = useState(null)
     //hook 
     useEffect(() => {
          const pegarFunkos = async () => {
               const { data } = await axios.get("http://localhost:5000/api/funko/")
               setFunko(data);
               console.log(funko)
          }
          pegarFunkos();
     }, [])
     const desc = useCallback(()=>{
       const   pegarFunkos = async () => {
               const { data } = await axios.get("http://localhost:5000/api/funko/desc")
               setFunko(data);
               console.log(funko)
          }
          pegarFunkos();   
     })
     const valor = useCallback(()=>{
          const   pegarFunkos = async () => {
                  const { data } = await axios.get("http://localhost:5000/api/funko/valor")
                  setFunko(data);
               
             }
             pegarFunkos();
             
        })

     
     const menu = (
          <Menu
            items={[
              {
                label: 'Descrição',
                onClick:desc,
                key: '1',
              },
              {
               label: 'Preço',
               onClick:valor,
               key: '2',
             },
            ]}
          />
        )
        
     return (
          <>
          <Dropdown.Button
        overlay={menu}

      >
        Ordenar Por:
      </Dropdown.Button>
          
               <Row>
                    {funko?.map((item) => (
                         <CompFunkoCard key={item._id} url={item.url} descricao={item.descricao} valor={item.valor} sale={item.sale}/>
                    ))}
              
               </Row>
          </>
     )
};
