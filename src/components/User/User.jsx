import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Button, Input, Card } from "antd";
import "./User.css";
import { Avatar } from "antd";
import {
  UserOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { follow, unfollow } from "../../redux/actions/user";

const User = (props) => {
  const { nickname } = useParams();
  const user = props.users?.map((user) => {
    const isAlreadyFollowed = user.followers?.includes(props.user?._id);
    return (
      <div className="userCard" key={user._id}>
        <div className="card-father">
          <Avatar size={64} icon={<UserOutlined />} />
          <div className="info-user">
            <p>{user.nickname}</p>
            <p>{user.email}</p>
          </div>
          <div className="info-user">
            <p>Followers: {user.followers?.length}</p>
            <p>Following: {user.following?.length}</p>
          </div>
          {isAlreadyFollowed ? (
            <Button
              type="dashed"
              onClick={
                isAlreadyFollowed
                  ? () => unfollow({ _id: user._id, nickname })
                  : () => follow({ _id: user._id, nickname })
              }
            >
              Unfollow{" "}
              <UsergroupDeleteOutlined
                style={{ fontSize: "20px", color: "#08c", padding: "0.2em" }}
              />
            </Button>
          ) : (
            <Button
              type="dashed"
              onClick={
                isAlreadyFollowed
                  ? () => unfollow({ _id: user._id, nickname })
                  : () => follow({ _id: user._id, nickname })
              }
            >
              Follow{" "}
              <UsergroupAddOutlined
                style={{ fontSize: "20px", color: "#08c", padding: "0.2em" }}
              />
            </Button>
          )}
        </div>
      </div>
    );
  });
  return <>{user}</>;
};

const mapStateToProps = (state) => ({
  users: state.credentials.users,
  user: state.credentials.user,
});
export default connect(mapStateToProps)(User);
