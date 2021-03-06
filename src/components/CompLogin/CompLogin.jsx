import { Button, Checkbox, Col, Form, Input, Result,Alert } from 'antd';
import axios from 'axios';
import { useContext, useState, } from 'react';
import LoginContext from '../../context/ContextLogin'
import {Navigate} from "react-router-dom"


export const CompLogin = () => {
  const {login, setLogin} = useContext(LoginContext)
  const [status, setStatus] = useState(null)

  const onFinish = async(values) => {
    try{
      const Result = await axios.post("http://localhost:5000/api/usuario/login", values)
      setLogin(Result.data);

      console.log(Result.data);
    }catch(error){
      setStatus(error.request.status)
      console.log(error.request.status)
    }
  }


  return (
    <>
    {
      login ? <Navigate to="/Loja" replace /> : (  <Form
        name="basic"
        labelCol={{
          span: 6
        }}
        wrapperCol={{
          span: 13
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <>
          {
             status === 401 ? <Alert type='error' style={{marginBottom:10 }} message="Usuario ou senha icorretos" showIcon/> : null
          }
        </>
        <Form.Item
          label="Usuario"
          name="user"
          rules={[
            {
              required: true,
              message: 'Por favor insira seu usuario!'
            }
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Senha"
          name="senha"
          rules={[
            {
              required: true,
              message: 'Por favor insira sua senha!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 11,
            span: 16
          }}
        >
          <Button type="primary" htmlType="submit">
                Enviar
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16
          }}
        >
          <a href="/CadastroUsuario">N??o tem uma conta? Cadastre-se agora!</a>
        </Form.Item>
      </Form>)
    }
  
    </>
  );
};


