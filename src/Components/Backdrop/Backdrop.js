import React from 'react'
import './Backdrop.css'
const backDrop = (props) =>{
    return props.show?<div className="BackGround" onClick={props.close}></div>:null;
}

export default backDrop;