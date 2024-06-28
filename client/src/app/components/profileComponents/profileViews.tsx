'use client'
import { useState } from "react";
import { colors } from "../colors/Color";
import { Post, UserPosts } from "../posts/Post";


export const MyPosts = () => {
    return (
        <div className="p-5" style={{width:"90%", height:"50%", backgroundColor:colors["Dark Blue"], 
        borderRadius:"2rem", color:"white",overflow:"scroll", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"
        }}>
            <div style={{width:"100%",fontWeight:"100",fontSize:"2rem", fontFamily:"Roboto, sans-serif"}}>My Posts</div>
            {/* <UserPosts/> */}
            
            
        </div>
    )
}

export const Favorites = () => {
    return (
        <div className="p-5" style={{width:"90%", height:"50%", backgroundColor:colors["Dark Blue"], borderRadius:"2rem", color:"white", fontSize:"2rem"}}>
             <div style={{width:"100%",fontWeight:"100",fontSize:"2rem", fontFamily:"Roboto, sans-serif", }}>Favorites</div>
                {/* <UserPosts/> */}
        </div>
    )
}