import { Form, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import { login } from '../../redux/actions/user';
import { notification } from "antd";
import {connect} from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = (props) => {
    AOS.init();
  let navigate = useNavigate();

  const surf= (lugar) => {
    if(!props.token){
    setTimeout(()=> {
        navigate(lugar);
    }, 2000);
    }
}
    const onFinish = async (values) => {
        const res = await login(values);
        if(!res.data.includes('email' && 'contraseña')){
        notification.success({ message: "Bienvenida, bienvenido y/o bienvenide, !!!WELCOME TO THE PARTY🥳!!!",description: res.data });
    }
        if(res.data.includes('email' || 'contraseña')){
            notification.error({ message: "Error email o contraseña inválidos",description: res.data });
        }
    };

      return (
        <div className="skinLogin designLogin">
            <Form data-aos="flip-right"
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
                name="email"
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
                <Button type="dashed" htmlType="submit"onClick={()=>surf("/home")}>
                LOGIN
                </Button>
            </Form.Item>
            </Form>
        </div>
      );
    
};


const mapStateToProps = (state) => ({ user: state.credentials.user, token: state.credentials.token });
export default connect(mapStateToProps)(Login);