import { Button, Checkbox, Form, Input } from 'antd';

export const CompNovoUsuario = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
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
        name="Nome"
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

