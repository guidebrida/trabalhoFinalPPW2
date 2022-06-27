import { Alert, Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';

export const CompNovoUsuario = () => {
  const [status, setStatus]= useState(null)
  const onFinish = async (values) => {  
    try{
      const Result = await axios.post("http://localhost:5000/api/usuario/", values)
      setStatus(Result.status); 
    }catch(error){
      setStatus(error.request.status)
    }
    
    };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    {
      status === 200 ? <Alert style={{marginBottom:10 }}  type='success'message="Usuario Cadastrado com Sucesso" showIcon/> : status === 409 ? <Alert  style={{marginBottom:10 }}type='error' message="Esse usuário já se encontra cadastrado"showIcon/> : null
    }
    <Form
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

        <Form.Item
        label="Nome"
        name="nome"
        rules={[
          {
            required: true,
            message: 'Por favor insira seu Nome!'
          }
        ]}
      >
        <Input />
        </Form.Item>
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
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};