import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, getUserInfo } from "../../redux/actions/user";
import { Modal, Button, Input, notification } from "antd";
import "./Profile.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = (props) => {
  AOS.init();
  let navigate = useNavigate();
  //Hooks
  const [dataUser, setDataUser] = useState({
    nickname: props.user?.nickname,
    image_path: props.user?.image_path,
    city: props.user?.city,
    email: props.user?.email,
    followers: props.user?.followers,
    following: props.user?.following,
  });

  const [visible, setVisible] = useState(false);

  const fillData = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (props.user?.token === "") {
      navigate("/");
    }
  });
  const onSubmit = async () => {
    try {
      const res = await updateUser(props.user?._id, dataUser);
      if (res) {
        getUserInfo();
          setVisible(false);
          notification.success({ message: "Perfil actualizado con éxito" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card" data-aos="zoom-in-down">
        <h1>{props.user?.image_path}</h1>
        <p>
          <b>Nickname: </b>
          {dataUser.nickname}
        </p>
        <p>
          <b>City: </b>
          {dataUser.city}
        </p>
        <p>
          <b>Email: </b>
          {dataUser.email}
        </p>
        <p>
          <b>Followers: </b>
          {dataUser.followers}
        </p>
        <p>
          <b>Following: </b>
          {dataUser.following}
        </p>
        <Button type="dashed" onClick={() => setVisible(true)}>
          Edit Profile
        </Button>
        <Modal
          title="Edit Profile"
          visible={visible}
          onOk={() => onSubmit()}
          onCancel={() => setVisible(false)}
        >
          <p>
            <b>Nickname:</b>
          </p>
          <Input
            name="nickname"
            type="text"
            variant="filled"
            autoComplete="off"
            value={dataUser.nickname || ""}
            onChange={(e) => {
              fillData(e);
            }}
          />
          <p>
            <b>City:</b>
          </p>
          <Input
            name="city"
            type="text"
            variant="filled"
            autoComplete="off"
            value={dataUser.city || ""}
            onChange={(e) => {
              fillData(e);
            }}
          />
          <p>
            <b>Image:</b>
          </p>
          <Input
            name="image_path"
            type="url"
            variant="filled"
            autoComplete="off"
            value={dataUser.image_path || ""}
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
  message: state.credentials.message,
});
export default connect(mapStateToProps)(Profile);
