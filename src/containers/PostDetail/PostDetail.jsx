import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/posts";


import "./PostDetail.css";

const PostDetail = (props) => {
    //Hooks
    // const [dataPost, setDataPost] = useState({
    //     creatorId: props.posts.creatorId,
    //     commentsId: props.posts.commentId,
    //     title: props.posts.title,
    //     message: props.posts.message,
    //     likes: props.posts.likes
    // });
    // const [dataComments, setDataComments] = useState({
    //     creatorId: props.comments.creatorId,
    //     postId: props.comments.postId,
    //     commentsId: props.comments.commentId,
    //     message: props.comments.message,
    //     likes: props.comments.likes
    // });

    // useEffect(() => {
      
    //     getPostById();
        
    //     setDataPost(props.posts);

    //     console.log(props.posts);
    // }, []);
    return (
        <div className="Detail">
           Soy PostDetail
              {/* props.posts.map((post,index)=>(
                 <div className="father">
                     <div className="row1">
                        <div className="title" key={index}>Title: {post.title}</div>
                        <div className="message" key={index}>Message:{post.message}</div>
                    </div>
                    <div className="row2">
                        <div className="comments"key={index}>Comments:{post.comments}</div>
                        <div className="likes"key={index}>Likes:{post.likes}</div>
                    </div> 
                 </div>

             )
             ) */}
        
            
        </div>
    );
  };
const mapStateToProps = (state) => ({
  user: state.credentials.user,
  token: state.credentials.token,
  message: state.credentials.message,
  posts: state.posts.posts
});
export default connect(mapStateToProps)(PostDetail);