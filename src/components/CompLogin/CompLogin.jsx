import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useContext, useState } from 'react';
import LoginContext from '../../context/ContextLogin'

export const CompLogin = () => {
  const {login, setLogin} = useContext(LoginContext)

  const onFinish = async(values) => {
    try{
      const Result = await axios.get("n ta cert", values)
      setLogin(Result.data);
      
    }catch(error){
      console.log(error.request.status)
    }
  }


  return (
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Usuario"
        name="Usuario"
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
        name="Senha"
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
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
         <a href="/CadastroUsuario">Não tem uma conta? Cadastre-se agora!</a>
      </Form.Item>
    </Form>
  );
};


