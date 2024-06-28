'use client'

import { useState, useEffect, use } from "react";
import { Menu, Title } from "../components/menu/Menu";
import {colors} from "../components/colors/Color";
import { Filter, News } from "../components/filter/filter";
import CIcon from '@coreui/icons-react';
import { Post } from "../components/posts/Post";
import { cilCalendar, cilUser, cilHome, cilAccountLogout, cilSend, cilFile} from '@coreui/icons';
import { text } from "stream/consumers";

export default function Feed() {
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState({})
    const [postTitle, setTitle] = useState<String>('');
    const [content, setContent] = useState<String>('');
    const [tag, setTag] = useState<String[]>([]);
    const [selectedTag, setSelectedTag] = useState<String>('All');
    const fetchPosts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/posts/all");
            let data = await response.json();
            data = data.sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime());
            data = data.filter((post: { tags: String[] }) => post.tags.includes(selectedTag) || selectedTag === 'All');
            setPosts(data);
            // console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
 

    useEffect(() => {
        fetchPosts();
    },[])
    useEffect(() => {
        console.log(posts)
        console.log(selectedTag)
    },[selectedTag])




    return (
        <main className="flex h-screen w-screen flex-row" style={{ backgroundColor: "edeef0" }}>
            <div className="h-full w-1/3 flex flex-col items-center p-5 gap-5">
                <Title/>
                <Menu/>
                <News/>
                <Filter setSelectedTag={setSelectedTag}/>
            </div>
            <div className="h-full w-2/3 flex flex-col items-center p-5">
            <div className="w-full h-full flex flex-col items-center gap-10" style={{backgroundColor: colors["offW"], 
            borderRadius: "2rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)", overflowY: "auto", padding:"2rem 0"}}>
                {
                    posts.map((post: any) => {
                        return <Post key={post.id} date={post.date} timestamp={post.timestamp} user={post.user} tags={post.tags} title={post.title} text={post.text} image={post.image} firm={post.firm} likes={post.likes} />
                    })
                }
                

                </div>
            </div>
        </main>
    )
}