import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts, like, dislike } from "../../redux/actions/posts";
import AddPost from "./AddPost/AddPost";
import "./Home.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Home = (props) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="Home">
      <AddPost />
      {props.posts.map((post, index) => {
        const isAlreadyLiked = post.likes?.includes(props.user?._id);

        return (
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
                Likes:{post.likes?.length}
                {isAlreadyLiked ? (
                  <HeartFilled
                    onClick={
                      isAlreadyLiked
                        ? () => dislike(post._id)
                        : () => like(post._id)
                    }
                  />
                ) : (
                  <HeartOutlined
                    onClick={
                      isAlreadyLiked
                        ? () => dislike(post._id)
                        : () => like(post._id)
                    }
                  />
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
