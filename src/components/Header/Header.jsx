import React, {useEffect, useState} from 'react';
import { LOGOUT } from "../../redux/types";
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';


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
                    <div className="link" onClick={()=>surf("/login")}>Login</div>
                    <div className="link" onClick={()=>surf("/register")}>Register</div>   
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
                    <div className="link" onClick={()=>surf("/profile")}>{props.user.nickname}</div>
                    <div className="link" onClick={()=>logOut()}>Logout</div>  
                    <div className="link"onClick={()=>surf("/")}>Home</div>   
                </div>
            </div>
        )
    }
}



    



const mapStateToProps = (state) => ({ user: state.credentials.user, token: state.credentials.token });
export default connect(mapStateToProps)(Header);