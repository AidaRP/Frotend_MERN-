import { Form, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { login } from '../../redux/actions/user';
import { notification } from "antd";
import "./Login.css";

const Login = () => {
      
    const onFinish = async (values) => {
        const res = await login(values);
        console.log(res)
        if(res.data.includes('email' && 'contraseña')){
        notification.success({ message: "Bienvenida, bienvenido y/o bienvenide, !!!WELCOME TO THE PARTY🥳!!!",description: res.data });
        }
        else{
            notification.error({ message: "Error email o contraseña inválidos",description: res.data });
        }
    };
    

    
      return (
        <div className="skinLogin designLogin">
            <Form
            name="basic"
            labelCol={{
                span: 10,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            >
            <Form.Item
                label="Email"
                name="Email"
                rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        
            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
        
            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
        
            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                LOGIN
                </Button>
            </Form.Item>
            </Form>
        </div>
      );
    
};


export default Login;