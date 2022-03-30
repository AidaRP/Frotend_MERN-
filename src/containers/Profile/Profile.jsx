import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser, getUserInfo } from "../../redux/actions/user";
import { Modal, Button, Input } from "antd";
import "./Profile.css";


const Profile = (props) => {
    let navigate = useNavigate();
    //Hooks
    const [dataUser, setDataUser] = useState({
        nickname: props.user.nickname,
        image_path: props.user.image_path,
        city: props.user.city,
        email: props.user.email,
        followers: props.user.followers,
        following: props.user.following,
    });
const [visible, setVisible] = useState(false); 
    const fillData = (e) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    useEffect(() => {
        if (props.user.token === "") {
            navigate("/");
        }
    });
    const onSubmit = async () => {
        try {
            const res = await updateUser(props.user._id, dataUser);
            if (res) {
                getUserInfo();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container">
            <div className="card">
                <h1>{props.user.image_path}</h1>
                <p>
                    <b>Nickname: </b>
                    {props.user.nickname}
                </p>
                <p>
                    <b>City: </b>
                    {props.user.city}
                </p>
                <p>
                    <b>Email: </b>
                    {props.user.email}
                </p>
                <p>
                    <b>Followers: </b>
                    {props.user.followers}
                </p>
                <p>
                    <b>Following: </b>
                    {props.user.following}
                </p>
                <Button type="primary" onClick={() => setVisible(true)}>
                    Edit Profile
                </Button>
                <Modal
                    title="Edit Profile"
                    visible={visible}
                    onOk={() => onSubmit()}
                    onCancel={() => setVisible(false)}
                >
                    <p><b>Nickname:</b></p>
                    <Input
                        name="nickname"
                        value={dataUser.nickname}
                        onChange={fillData}
                    />
                    <p><b>City:</b></p>
                    <Input
                        name="city"
                        value={dataUser.city}
                        onChange={fillData}
                    />
                    <p><b>Image:</b></p>
                    <Input
                        name="image_path"
                        value={dataUser.image_path}
                        onChange={fillData}
                    />
                </Modal>
            </div>
        </div>
    );
}
                
const mapStateToProps = (state) => ({
  user: state.credentials.user,
  token: state.credentials.token,
  message: state.credentials.message,
});
export default connect(mapStateToProps)(Profile);
