import React, {useEffect, useState} from 'react';
import { LOGOUT } from "../../redux/types";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import { Button } from 'antd';


import './Header.css';

const Header = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
      
        console.log(props.token);
    }, []);

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
                <div className="headerSpace genreDesign">
                
                </div>
                <div className="headerSpace"></div>
                <div className="headerSpace linksDesign">
                <Button type="primary"  onClick={()=>surf("/login")}>Login</Button>
                <Button type="primary"  onClick={()=>surf("/register")}>Register</Button>  
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