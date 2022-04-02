import React, {useEffect, useState} from 'react';
import { LOGOUT } from "../../redux/types";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import { Button } from 'antd';


import './Header.css';

const Header = (props) => {
    let navigate = useNavigate();

    const surf = (lugar) => {
            navigate(lugar);
<<<<<<< HEAD
        }, 1000);
=======
>>>>>>> develop
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
<<<<<<< HEAD
                     <Button type="primary"  onClick={()=>surf("/profile")}>{props.user.nickname}</Button>
                     <Button type="primary"  onClick={()=>logOut()}>Logout</Button>
                     <Button type="primary"  onClick={()=>surf("/home")}>Home</Button>     
=======
                    <div className="link-header"onClick={()=>surf("/home")}>Home</div>   
                    <div className="link-header" onClick={()=>surf("/profile")}>{props.user?.nickname}</div>
                    <div className="link-header" onClick={()=>logOut()}>Logout</div>  
>>>>>>> develop
                </div>
            </div>
        )
    }
}



    



const mapStateToProps = (state) => ({ user: state.credentials.user, token: state.credentials.token });
export default connect(mapStateToProps)(Header);