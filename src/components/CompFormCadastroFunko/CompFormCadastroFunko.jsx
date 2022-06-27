import { Alert, Button, Checkbox, Form, Input, InputNumber, Switch } from 'antd';
import { useContext, useEffect, useState } from 'react';
import LoginContext from '../../context/ContextLogin';
import axios from 'axios';

export const CompFormCadastroFunko = () => {
  const {login} = useContext(LoginContext)
  const [venda, setVenda] = useState(false)
  const [status, setStatus]= useState(null)
  const onFinish = async (values) => {  
    const body = {...values, sale:venda}
    try{
     
      console.log(body)
      const Result = await axios.post(`http://localhost:5000/api/funko/${login.id}`, JSON.stringify(body),{headers:{'Content-Type':'application/json'}})
      setStatus(Result.status); 
    }catch(error){
      setStatus(error.request.status)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm()
  return (
    <>
    {
      status === 200 ? <Alert  style={{marginBottom:10 }} type='success' message="Funko Cadastrado com Sucesso" showIcon/> : status === 409 ? <Alert type='error'message="Funko ja se encontra cadastrado" showIcon/> : null
    }
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form = { form }
      autoComplete="off"

    >
      <Form.Item
        label="Descrição"
        name="descricao"
        rules={[
          {
            required: true,
            message: 'Por favor insira uma descrição!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Valor"
        name="valor"
        rules={[
          {
            required: true,
            message: 'Por favor insira um valor!'
          }
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Url da imagem"
        name="url"
        rules={[
          {
            required: true,
            message: 'Por favor insira uma url de imagem!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="A venda"
        name="sale"
        valuePropName='checked'
      >
        <Checkbox  onChange={() => setVenda(!venda)}/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 16,
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
