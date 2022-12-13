import React from "react";
import './VideoInfo.css';

function Part({Icon,title}){
    return(
        <div className="icons">
            <div><Icon /></div>
            <div>{title}</div>
        </div>
    );
}

export default Part;