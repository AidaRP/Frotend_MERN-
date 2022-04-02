import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Button, Input, Card } from "antd";
import "./User.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const User = (props) => {
  const user = props.users?.map((user) => {
    return (
      <div className="userCard" key={user._id}>
        <div className="card-father">
          <Avatar size={64} icon={<UserOutlined />} />
          <div className="info-user">
            <p>{user.nickname}</p>
            <p>{user.email}</p>
                </div>
                <div className="info-user">
            <p>Followers: 10</p>
            <p>Following: 21</p>
                </div>
                <button>Unfollow/Follow</button>
        </div>
      </div>
    );
  });
  return <>{user}</>;
};

const mapStateToProps = (state) => ({
  users: state.credentials.users,
});
export default connect(mapStateToProps)(User);
