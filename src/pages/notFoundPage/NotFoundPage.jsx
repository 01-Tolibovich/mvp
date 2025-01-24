import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Извените, страница не существует"
      extra={
        <Button onClick={() => navigate("/mvp", { replace: true })} type="primary">
          Назад в главную страницу
        </Button>
      }
    />
  );
};
