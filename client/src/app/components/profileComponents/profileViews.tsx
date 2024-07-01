'use client'
import { useEffect, useState } from "react";
import { colors } from "../colors/Color";
import { FavoritedPosts, Post, UserPosts } from "../posts/Post";



export const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    const selectedSID = "O803101";
    const fetchPosts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/posts/all");
            let data = await response.json();
            data = data.sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime());
            console.log(data)
            data = data.filter((post: { user: string }) => post.user.toLowerCase() === selectedSID.toLowerCase());
            setPosts(data);
            console.log("data",data)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        fetchPosts();
    },[])
    return (
        <div className="p-5" style={{width:"90%", height:"50%", backgroundColor:colors["DBlue"], 
        borderRadius:"2rem", color:"white",overflow:"scroll", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)", gap:"1rem", flexDirection:"column", display:"flex"
        }}>
            <div style={{width:"100%",fontWeight:"100",fontSize:"2rem", fontFamily:"Roboto, sans-serif"}}>My Posts</div>
            {posts.map((post: any) => {
                return <UserPosts key={post.id} date={post.date} timestamp={post.timestamp} user={post.user} tags={post.tags} title={post.title} text={post.text} image={post.image} firm={post.firm} likes={post.likes} _id={post._id}/>
            })}
            
            
        </div>
    )
}

export const Favorites = () => {
    const [posts, setPosts] = useState([]);
    const selectedSID = "O803101";
    const fetchPosts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/posts/all");
            let data = await response.json();
            data = data.sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime());
            console.log(data)
            data = data.filter((post: { user: string }) => post.user.toLowerCase() === selectedSID.toLowerCase());
            setPosts(data);
            console.log("data",data)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className="p-5" style={{width:"90%", height:"50%", backgroundColor:colors["DBlue"], borderRadius:"2rem", color:"white", fontSize:"2rem"}}>
             <div style={{width:"100%",fontWeight:"100",fontSize:"2rem", fontFamily:"Roboto, sans-serif", }}>Favorites</div>
            {posts.map((post: any) => {
                return <UserPosts key={post.id} date={post.date} timestamp={post.timestamp} user={post.user} tags={post.tags} title={post.title} text={post.text} image={post.image} firm={post.firm} likes={post.likes} _id={post._id}/>
            })}
        </div>
    )
}