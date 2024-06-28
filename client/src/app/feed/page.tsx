'use client'

import { useState, useEffect, use } from "react";
import { Menu, Title } from "../components/menu/Menu";
import {colors} from "../components/colors/Color";
import { Filter, News } from "../components/filter/filter";
import CIcon from '@coreui/icons-react';
import { Post } from "../components/posts/Post";
import { cilCalendar, cilUser, cilHome, cilAccountLogout, cilSend, cilFile} from '@coreui/icons';

export default function Feed() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/posts/all");
            const data = await response.json();
            setPosts(data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
            
    }
    useEffect(() => {
        fetchPosts();
    },[])

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const postData = {
            date: '2024-01-01',
            timestamp: '2024-01-01 12:00:00',
            user: 'O123456',
            tags: "",
            title: title,
            text: content,
            image: null,
            firm: 'Houston, Texas',
            likes: 0
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className="flex h-screen w-screen flex-row" style={{ backgroundColor: "edeef0" }}>
            <div className="h-full w-1/3 flex flex-col items-center p-5 gap-5">
                <Title/>
                <Menu/>
                <News/>
                <Filter/>
            </div>
            <div className="h-full w-2/3 flex flex-col items-center p-5">
            <div className="w-full h-full flex flex-col items-center gap-10" style={{backgroundColor: colors["offW"], 
            borderRadius: "2rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)", overflowY: "auto", padding:"2rem 0"}}>
                    {/* <Post/>
                    <Post/>
                    <Post/>
                    <Post/> */}

                </div>
            </div>
        </main>
    )
}