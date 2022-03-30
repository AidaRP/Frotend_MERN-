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
        console.log('Soy la Juani');
    }, []);
    
    return (
        <div className="container">
            <div className="card">
             
                <p>
                    Title:`${props.posts.title}`
                </p>
                <p>
                    Message:`${props.posts.message}`
                </p>
                <p>
                    Comments:`${props.posts.comments}`
                </p>
                <p>
                    Likes:`${props.posts.likes}`
                </p>
                
            </div>
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
  
