import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import { register } from "../../redux/actions/user";
import { notification } from "antd";
import "./Register.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  AOS.init();
  const onFinish = async (values) => {
    const res = await register(values);
    if(!res.data.includes('contraseña')){
      notification.success({ message: "Revisa tu correo",description: res.data });
    }
    if(res.data.includes('contraseña')){
      notification.error({ message: "Error",description: res.data });
    }
  };

  return (
    <div className="designRegister">
      <Form data-aos="flip-right"
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
            label="Nickname"
            name="nickname"
            rules={[
              {
                required: true,
                message: "Please input your Nickname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
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

export default Register;
