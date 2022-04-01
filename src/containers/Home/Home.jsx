import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createPost, getPosts } from "../../redux/actions/posts";
import {useNavigate} from 'react-router-dom';
import { Form, Input, Button, Radio, notification } from 'antd';


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

    let navigate = useNavigate();
    const surf = (lugar) => {

        setTimeout(()=> {
            navigate(lugar);
        }, 2000);
    }

    useEffect(() => {
      
        getPosts();
        
        setDataPost(props.posts);

        console.log(props.posts);
    }, []);

    const onFinish = async (values) => {
        const res = await createPost(values);
        if(!res.data.includes('title' && 'message')){
        notification.success({ message: "Tu post ha sido creado",description: res.data });
        }
        if(res.data.includes('title' || 'message')){
            notification.error({ message: "Error title o message inválidos",description: res.data });
        }
    }
   
    
    return (
        <div className="Home">
{/*             
           <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your title!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                {
                  required: true,
                  message: 'Please input your message!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            </Form>
             */}
             {props.posts.map((post,index)=>(
                 <div className="father" onClick={()=>surf("/postDetail")}>
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