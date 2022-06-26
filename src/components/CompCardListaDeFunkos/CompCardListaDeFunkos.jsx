import { Card } from 'antd';
const { Meta } = Card;
import { Button } from 'antd';
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';

export const CompCardListaDeFunkos = (props) => {
  const [size, setSize] = useState('default');
  return (
    <>
      <Card
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
        <Button type="primary" icon={<EditOutlined />} size={size} />
        <Button type="primary" icon={<DeleteOutlined />} size={size} />
      </Card>
    </>
  );
};


