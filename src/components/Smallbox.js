import React from "react";
import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";

import '../smallbox.css';
export default function Smallbox({ comments, title, avatar, labels }) {
    const [colors, setColors] = useState("yellow");

    
      
    return (
<div>                      
        <div className="smallbox" >
            <div className="title-span">
                <div className="big-dot"><div className="dot"></div></div>
                <div className="title"><a><strong>{title}</strong></a>
                    <span className="labels">
                        {
                        labels.map((value) =>         
                            <span   key={value.id}>
                                
                                <a style={{textDecoration:"none",backgroundColor:`${colors}`,border:"none",borderRadius:"10px"}} href={value.url}>{value.name}</a>
                            </span>
                            
                        )}
                    </span>
                    </div>
                    <div><img className="image" src={avatar}></img></div>
                    <div className="comments">&#9993;{comments}</div>
                </div>
                <div className="time">gregrhrtt</div>
            
        </div>
        </div>
    )
}