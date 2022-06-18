import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import { useState } from 'react';

export const CompFormFunko = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Nome do funko">
        <Input />
      </Form.Item>
      <Form.Item label="descrição">
        <Input />
      </Form.Item>
      <Form.Item label="Preço">
        <Input />
      </Form.Item>
      <Form.Item label="Link">
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
