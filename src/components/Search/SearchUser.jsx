import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUsersByNickname } from "../../redux/actions/user";
import User from "../User/User";
import './SearchUser.css';
const SearchUser = () => {
  const { nickname } = useParams();
  useEffect(() => {
    getUsersByNickname(nickname);
  }, [nickname]);
  return (
    <div className="users-container">
      <User />
    </div>
  );
};
export default SearchUser;
