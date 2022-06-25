import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect } from 'react';

export const CompFormMeuUsuario = (props) => {
    const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    form.setFieldsValue({
        nome:props.nome,
        usuario:props.user,
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
        name="usuario"
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
