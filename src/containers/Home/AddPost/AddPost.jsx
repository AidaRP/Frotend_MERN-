import { Form, Input, Button, notification } from "antd";
import { createPost, getPosts } from "../../../redux/actions/posts";
import "./AddPost.css";

const AddPost = () => {
  const onFinish = async (values) => {
    //values son los datos recogidos del formulario de antd
    //antd por detras nos recoge los datos sin tener que hacer un formData, setFormData etc.
    //solo hay que poner en el input el name que sea el equivalente al del backend(name="title")
    const res = await createPost(values);
    if (res) {
      notification.success({
        message: "Post successfully created",
      });
    }
    getPosts();
  };
  return (
    <div className="add-post-container">
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
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="message"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="dashed" htmlType="submit">
            Create post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPost;
