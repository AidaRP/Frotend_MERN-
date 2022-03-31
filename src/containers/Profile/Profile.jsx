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
    
    

    const fillData = (e) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value });
    };

    // useEffect(() => {
    //     getUserInfo();
    // }, []);

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
            };
            
        } catch (error) {
            console.log(error);
        }
    };
    const [visible, setVisible] = useState(false);

    return (
        <div className="container">
            <div className="card">
                <h1>{props.user.image_path}</h1>
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
                        type="text"
                        variant="filled"
                        autoComplete="off"
                        value={dataUser.nickname || ""}
                        onChange={(e) => {
                            fillData(e);
                          }}
                    />
                    <p><b>City:</b></p>
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
                    <p><b>Image:</b></p>
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
                    <Button type="primary" onClick={() => onSubmit()}>
                    Update
                </Button>
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
