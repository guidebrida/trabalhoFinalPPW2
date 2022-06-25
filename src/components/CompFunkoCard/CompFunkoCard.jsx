import { Card } from 'antd';
const { Meta } = Card;
import { useState } from 'react';

export const CompFunkoCard = (props) => {
 
  return (
    <>
        {
      console.log(props.url)
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
        <Meta title={props.descricao}   description={"R$"+ props.valor} />
      </Card>
    </>
  );
};


