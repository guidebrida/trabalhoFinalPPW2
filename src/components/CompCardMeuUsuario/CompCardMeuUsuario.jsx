import { Card } from 'antd';

export const CompCardMeuUsuario = () => (
  <>
    <Card
      title="Nome"
      extra={<a href="#">Editar</a>}
      style={{
        width: '30%',
      }}
    >
      <p>Usuário: </p> 
      <p>Senha: </p>
    </Card>
  </>
);