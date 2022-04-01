import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/posts";
import AddPost from "./AddPost/AddPost";
import "./Home.css";

const Home = (props) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="Home">
          <AddPost />
      {props.posts.map((post, index) => (
        <div className="father">
          <div className="row1">
            <div className="title" key={index}>
              Title: {post.title}
            </div>
            <div className="message" key={index}>
              Description:{post.message}
            </div>
          </div>
          <div className="row2">
            <div className="comments" key={index}>
              Comments:{post.comments}
            </div>
            <div className="likes" key={index}>
              Likes:{post.likes}
            </div>
          </div>
        </div>
      ))}
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
