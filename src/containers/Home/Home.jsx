import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/posts";


import "./Home.css";

const Home = (props) => {
    //Hooks
    const [dataPost, setDataPost] = useState({
        creatorId: props.posts.creatorId,
        commentsId: props.posts.commentId,
        title: props.posts.title,
        message: props.posts.message,
        likes: props.posts.likes
    });

    useEffect(() => {
      
        getPosts();
        
        setDataPost(props.posts);

        console.log(props.posts);
    }, []);
    return (
        <div className="Home">
           
             {props.posts.map((post,index)=>(
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
             )}
        
            
        </div>
    );
  };
const mapStateToProps = (state) => ({
  user: state.credentials.user,
  token: state.credentials.token,
  message: state.credentials.message,
  posts: state.posts.posts
});
export default connect(mapStateToProps)(Home);
  
