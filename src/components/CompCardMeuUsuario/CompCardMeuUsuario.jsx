import { Card } from 'antd';
const { Meta } = Card;

export const CompCardMeuUsuario = (props) => (
  <>
    <Card
      title= {props.nome}
      extra={<a href="#">Editar</a>}
      style={{
        width: '30%',
      }}
    >
      <p>Usuário: {props.user}</p> 
    </Card>
  </>
);