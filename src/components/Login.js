import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import bg from "../images/Background/bg2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const delIdUser = () => {
    localStorage.clear();
  };

  useEffect(() => {
    delIdUser();
  }, []);

  const onFinish = async (values) => {
    try {
      await axios.post(`http://localhost:8080/api/user/auth`, values).then((res) => {
        localStorage.setItem("id_user", res.data.data[0].id_user);
        navigate("/");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${bg})` }}>
      <div style={{ border: "1px solid gray", padding: "3rem", width: "30%", borderRadius: "1rem", boxShadow: "1px 2px 9px gray", backgroundColor: "white" }}>
        <h4 style={{ textAlign: "center" }}>
          FORM LOGIN
          <hr />
        </h4>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%" }}>
              Log in
            </Button>
            Or <a href="/Register">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
