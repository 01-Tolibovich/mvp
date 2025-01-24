import { Button, Flex, Form, Input, Typography } from "antd";

import "./styles.scss";
import { useState } from "react";

export const ResetPassword = () => {
  const [enterTheCode, setEnterTheCode] = useState(false);

  const onFinish = () => {
    setEnterTheCode(true);
  };

  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const onInput = (value) => {
    console.log('onInput:', value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  return (
    <div className="reset-password">
      <Form
        className="form-wrapper"
        name="basic"
        layout="vertical"
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
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {!enterTheCode ? (
          <>
            <Form.Item
              label="Введите адрес эллектронной почты"
              name="Введите адрес эллектронной почты"
              rules={[
                {
                  required: true,
                  message: 'Поле "Логин" не может быть пустым!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Отправить код
            </Button>
          </>
        ) : (
          <>
            <Flex gap="middle" align="flex-start" vertical>
            <Typography.Title className="enter-the-code" level={5}>Введите код</Typography.Title>
            <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
            </Flex>
          </>
        )}
      </Form>
    </div>
  );
};
