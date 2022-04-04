import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUsers} from "../../redux/actions/user";
import User from "../../components/User/User";
import './Users.css';
const Users = () => {
  
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="users-container">
      <User />
    </div>
  );
};
export default Users;