import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getPosts,
  like,
  dislike,
  deletePostById,
} from "../../redux/actions/posts";
import AddPost from "./AddPost/AddPost";
import "./Home.css";
import {
  HeartOutlined,
  HeartFilled,
  DeleteOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  AOS.init();
  useEffect(() => {
    getPosts();
  }, []);

  let navigate = useNavigate();

  return (
    <div className="Home">
      <AddPost />
      {props.posts.map((post, index) => {
        const isAlreadyLiked = post.likes?.includes(props.user?._id);
        return (
          <div className="father" key={index} data-aos="zoom-in-right">
            <div className="row1">
              <div className="title">Title: {post.title}</div>
            </div>
            <div className="row2">
              <div className="comments">
                <CommentOutlined />
                <span>{post.commentsId ? post.commentsId?.length : 0}</span>
              </div>
              <div className="likes">
                Likes:{post.likes?.length}
                {isAlreadyLiked ? (
                  <HeartFilled
                    onClick={
                      isAlreadyLiked
                        ? () => dislike(post._id)
                        : () => like(post._id)
                    }
                    style={{
                      fontSize: "20px",
                      color: "#08c",
                      padding: "0.2em",
                    }}
                  />
                ) : (
                  <HeartOutlined
                    onClick={
                      isAlreadyLiked
                        ? () => dislike(post._id)
                        : () => like(post._id)
                    }
                    style={{
                      fontSize: "20px",
                      color: "#08c",
                      padding: "0.2em",
                    }}
                  />
                )}
                {props.user?._id == post.creatorId?._id ? (
                  <DeleteOutlined
                    style={{ fontSize: "20px", color: "red", padding: "1em" }}
                    onClick={() => deletePostById(post._id)}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.credentials.user,
  token: state.credentials.token,
  message: state.credentials.message,
  posts: state.posts.posts,
});
export default connect(mapStateToProps)(Home);
