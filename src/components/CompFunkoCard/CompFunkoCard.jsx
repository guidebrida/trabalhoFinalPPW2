import { Card } from 'antd';
import { Button } from 'antd/lib/radio';
const { Meta } = Card;
import { useState } from 'react';

export const CompFunkoCard = (props) => {
 
  return (
    <>
        {
    }
      <Card
        hoverable
        style={{
          width: 240
        }}
        cover={
          <img src={props.url} />
        }
      >
        <Meta title={props.descricao}   description={`R$ ${props.valor}, ${props.sale ? 'A venda' : 'Não está disponivel'}`} />
      </Card>
    </>
  );
};


