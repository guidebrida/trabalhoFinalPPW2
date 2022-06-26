import { Button, Checkbox, Form, Input } from 'antd';
import { useContext, useEffect, useState } from 'react';
import LoginContext from '../../context/ContextLogin';
import axios from 'axios';

export const CompFormMeuUsuario = (props) => {
  const {login} = useContext(LoginContext)
  const [status, setStatus]= useState(null)
  const onFinish = async (values) => {  
    try{
      const Result = await axios.put(`http://localhost:5000/api/usuario/${login.id}`, values)
      setStatus(Result.status); 
    }catch(error){
      setStatus(error.request.status)
    }
    
    };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
        nome:props.nome,
        user:props.user
    })
  }, [props])
  return (
    <>
    <Form
      disabled={!props.editar}
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      form = { form }
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"

    >
      <Form.Item
        label="Nome"
        name="nome"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Usuario"
        name="user"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="senha"
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};
