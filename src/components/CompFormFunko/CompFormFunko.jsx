import { Button, Col, Form, Input, Radio, Row, Switch } from 'antd';
import { useState } from 'react';

export const CompFormFunko = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4
      }}
      wrapperCol={{
        span: 5
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Tamanho do formulario" name="size">
        <Radio.Group>
          <Radio.Button value="small">Pequeno</Radio.Button>
          <Radio.Button value="default">Padrão</Radio.Button>
          <Radio.Button value="large">Grande</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Nome do funko">
        <Input />
      </Form.Item>
      <Form.Item label="Descrição">
        <Input />
      </Form.Item>
      <Form.Item label="Preço">
        <Input />
      </Form.Item>
      <Form.Item label="Link da imagem">
        <Input />
      </Form.Item>
      <Form.Item label="A venda" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Cadastrar">
        <Button type="primary">Cadastrar</Button>
      </Form.Item>
    </Form>
  );
};
