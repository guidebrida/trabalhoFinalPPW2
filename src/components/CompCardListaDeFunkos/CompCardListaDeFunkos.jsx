import { Alert, Card } from 'antd';
const { Meta } = Card;
import { Button } from 'antd';
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { CompEditarFunko } from '../CompEditarFunko/CompEditarFunko';
import {Link, Navigate, Outlet, useNavigate} from "react-router-dom"

import axios from 'axios';

export const CompCardListaDeFunkos = (props) => {
  const [size, setSize] = useState('default');
  const [status, setStatus] = useState();
  const navegacao = useNavigate();
  const deletar = async () => {
    const result = await axios.delete(`http://localhost:5000/api/funko/${props.id}`)
    setStatus(result.status)
   
  }
  return (
    <>
      {
        status ? null : (     <Card
          hoverable
          style={{
            width: 140
          }}
          cover={
            <img src={props.url} />
          }
        >
          <Meta title={props.descricao}   description={`R$ ${props.valor}, ${props.sale ? 'A venda' : 'Não está disponivel'}`} />
          <br />
          <Button type="primary"  icon={<EditOutlined />} size={size} onClick={()=> navegacao("/EditarFunko")}> </Button>
          <Button type="primary" onClick={deletar} icon={<DeleteOutlined />} size={size} />
        </Card>)
      }
 
    </>
  );


}

