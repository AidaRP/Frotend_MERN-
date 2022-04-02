import React, {useEffect, useState} from 'react';
import { LOGOUT } from "../../redux/types";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import { Button, Input } from 'antd';
import logo from '../../img/title.jpg'

import './Header.css';

const Header = (props) => {

    let navigate = useNavigate();

    const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/nickname/" + text);
    }
  };

    const surf = (lugar) => {

        setTimeout(()=> {
            navigate(lugar);
        }, 2000);
    }

    const logOut = () => { 
         props.dispatch({type:LOGOUT});
        
         setTimeout(()=>{
             navigate("/");
         },1000);
    }

    if(!props.token){
        return (
            <div className='designHeader'>
                
                    <img src={logo} alt="" />
                {/* <div className="headerSpace genreDesign">
                </div> */}
                
                {/* <div className="headerSpace"></div> */}
                <Input
       
        onKeyUp={handleChange}
        variant="default"
        placeholder="Search User"
      />
                <div className="linksDesign">
                <div type="primary"  className="link-header" onClick={()=>surf("/login")}>Login</div>
                <div type="primary" className="link-header"  onClick={()=>surf("/register")}>Register</div>  
                </div>
            </div>
        )
    }else {
        return (
            <div className='designHeader'>
                  <div className="headerSpace genreDesign">
               
                </div>
                <div className="headerSpace"></div>
                <div className="headerSpace linksDesign">
                    <div className="link-header" onClick={()=>surf("/profile")}>{props.user.nickname}</div>
                    <div className="link-header" onClick={()=>logOut()}>Logout</div>  
                    <div className="link-header"onClick={()=>surf("/")}>Home</div>   
                </div>
            </div>
        )
    }
}



    



const mapStateToProps = (state) => ({ user: state.credentials.user, token: state.credentials.token });
export default connect(mapStateToProps)(Header);