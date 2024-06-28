'use client'
import { useState } from "react";
import { colors } from "../colors/Color";


export const MyPosts = () => {
    return (
        <div className="p-5" style={{width:"90%", height:"50%", backgroundColor:colors["Dark Blue"], 
        borderRadius:"2rem", color:"white"
        }}>
            <div style={{width:"100%",fontWeight:"100",fontSize:"2rem", fontFamily:"Roboto, sans-serif", }}>My Posts</div>
            
        </div>
    )
}

export const Favorites = () => {
    return (
        <div className="p-5" style={{width:"90%", height:"50%", backgroundColor:colors["Dark Blue"], borderRadius:"2rem", color:"white",fontWeight:"700", fontSize:"2rem"}}>
             <div style={{width:"100%",fontWeight:"100",fontSize:"2rem", fontFamily:"Roboto, sans-serif", }}>Favorites</div>
        </div>
    )
}