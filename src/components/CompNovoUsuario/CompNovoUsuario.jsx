import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

export const CompNovoUsuario = () => {
  const onFinish = async (values) => {
      console.log(values);
      const Result = await axios.post("http://localhost:5000/api/usuario/", values)
      console.log(Result.data);
    };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  );
};

