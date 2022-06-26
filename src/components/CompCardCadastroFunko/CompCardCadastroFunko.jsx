import { Card } from 'antd';
import { useState } from 'react';
import { CompFormCadastroFunko } from '../CompFormCadastroFunko/CompFormCadastroFunko';
const { Meta } = Card;

export const CompCardCadastroFunko = (props) => {
  const [editar, setEditar] = useState(false)
  const clickEditar = () => {
    setEditar(true)
  } 
  return(
    <>
      <Card
        title= "Cadastro Funko"
        style={{
          width: '50%',
        }}
      >
        <CompFormCadastroFunko/>
      </Card>
    </>
  )
}