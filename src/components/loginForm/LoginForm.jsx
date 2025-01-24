import React from "react";
import { Button, Checkbox, Flex, Form, Input, notification, Typography } from "antd";
import useAuth from "../../store/auth";

import "./styles.scss";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { login, password, setIsAuth, setLogin, setPassword } = useAuth();

  const onFinish = async (values) => {
    if (login === "Daler" && password === "12345") {
      setIsAuth(true);

      await new Promise((resolve) => {
        api.info({
          message: `Привет, ${login}!`,
          description: "С возвращением!",
          placement: "topRight",
          onClose: resolve,
        });
      });

      navigate("/", { replace: true });
    } else {
      api.info({
        message: "Ошибка входа",
        description: "Неверный логин или пароль. Попробуйте снова.",
        placement: "topRight",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Form
        className="login-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Логин"
          name="Логин"
          rules={[
            {
              required: true,
              message: 'Поле "Логин" не может быть пустым!',
            },
          ]}
        >
          <Input onChange={(e) => setLogin(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="Пароль"
          rules={[
            {
              required: true,
              message: 'Поле "Пароль" не может быть пустым',
            },
          ]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          className=""
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Flex justify="space-between" align="center" >
            <Checkbox>Запомнить меня</Checkbox>
            <Typography.Paragraph onClick={() => navigate("/reset-password")} className="forget-the-password">Забыли пароль?</Typography.Paragraph>
          </Flex>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
