import { Form, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import { login } from '../../redux/actions/user';
import "./Login.css";

const Login = () => {
      
    const onFinish = (values) => {
        login(values)
      };
    
      return (
        <div className="skinLogin designLogin">
            <Form
            name="basic"
            labelCol={{
                span: 8,
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
                label="Nickname or Email"
                name="Nickname or Email"
                rules={[
                {
                    required: true,
                    message: 'Please input your nickname or your email!',
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
                Submit
                </Button>
            </Form.Item>
            </Form>
        </div>
      );
    };

export default Login;

