import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {  getPostById, updatePostById } from "../../redux/actions/posts";
import { Modal, Button, Input, notification } from "antd";
import "./PostDetail.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { POST_DETAIL } from "../../redux/types";

const PostDetail = (props) => {
  AOS.init();
  const { _id } = useParams();
  let navigate = useNavigate();
  //Hooks
  const [dataPost, setDataPost] = useState({
    title: props.post?.title,
    message: props.post?.message,
  });

  const [visible, setVisible] = useState(false);

  const fillData = (e) => {
    setDataPost({ ...dataPost, [e.target.name]: e.target.value });
  };

  useEffect(async () => {
    await getPostById(_id);
  }, []);
  useEffect(() => {
    getPostById();
    console.log(props.post);
  }, []);

  useEffect(() => {
    if (props.user?.token === "") {
      navigate("/");
    }
  });
  const onSubmit = async () => {
    try {
      const res = await updatePostById(props.user?._id, dataPost);
      if (res) {
        getPostById();
          setVisible(false);
          notification.success({ message: "Post actualizado con éxito" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card" data-aos="zoom-in-down">
        
        <p>
          <b>title: </b>
          {dataPost.title}
        </p>
        <p>
          <b>Message: </b>
          {dataPost.message}
        </p>
        <Button type="dashed" onClick={() => setVisible(true)}>
          Edit Post
        </Button>
        <Modal
          title="Edit Post"
          visible={visible}
          onOk={() => onSubmit()}
          onCancel={() => setVisible(false)}
        >
          <p>
            <b>Title:</b>
          </p>
          <Input
            name="title"
            type="text"
            variant="filled"
            autoComplete="off"
            value={dataPost.title || ""}
            onChange={(e) => {
              fillData(e);
            }}
          />
          <p>
            <b>Message:</b>
          </p>
          <Input
            name="message"
            type="text"
            variant="filled"
            autoComplete="off"
            value={dataPost.message || ""}
            onChange={(e) => {
              fillData(e);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.credentials.user,
  token: state.credentials.token,
  post: state.posts.post
});
export default connect(mapStateToProps)(PostDetail);
