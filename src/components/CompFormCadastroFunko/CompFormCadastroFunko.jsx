import { Button, Checkbox, Form, Input, Switch } from 'antd';
import { useContext, useEffect, useState } from 'react';
import LoginContext from '../../context/ContextLogin';
import axios from 'axios';

export const CompFormCadastroFunko = () => {
  const {login} = useContext(LoginContext)

  const [form] = Form.useForm()
  return (
    <>
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      form = { form }
      autoComplete="off"

    >
      <Form.Item
        label="Descrição"
        name="descricao"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Valor"
        name="Valor"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Url da imagem"
        name="url"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="A venda"
        name="sale"
      >
        <Switch />
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
