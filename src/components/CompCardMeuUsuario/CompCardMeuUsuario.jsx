import { Card } from 'antd';
import { useState } from 'react';
import { CompFormMeuUsuario } from '../CompFormMeuUsuario/CompFormMeuUsuario';
const { Meta } = Card;

export const CompCardMeuUsuario = (props) => {
  const [editar, setEditar] = useState(false)
  const clickEditar = () => {
    setEditar(true)
  } 
  return(
    <>
      <Card
        title= "Informações Usuário"
        extra={<a href="#" onClick={clickEditar}>Editar</a>}
        style={{
          width: '50%',
        }}
      >
        <CompFormMeuUsuario  editar={editar}  nome={props?.nome} user={props?.user} senha={props?.senha}/>
      </Card>
    </>
  )
}