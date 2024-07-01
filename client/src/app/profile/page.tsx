'use client'

import { useState } from "react";
import { Menu, Title, ProfilePhoto } from "../components/menu/Menu";
import {Info} from "../components/filter/filter";
import {colors} from "../components/colors/Color";
import { Favorites, MyPosts } from "../components/profileComponents/profileViews";


export default function Profile() {
    const [posts, setPosts] = useState([]);
    const selectedSID = "O803101";
    const fetchPosts = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/posts/all");
            let data = await response.json();
            data = data.sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime());
            data = data.filter((post: { SID: String }) => Array.isArray(post.SID) && post.SID.map(tag => tag.toLowerCase()).includes(selectedSID.toLowerCase()));
            setPosts(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return(
        <div className="w-screen h-screen flex flex-row"  style={{backgroundColor: colors["Dark Blue"]}}>
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-5 gap-5">
                <Title/>
                <Menu/>
                <ProfilePhoto/>
                <Info/>
            </div>
            <div className="w-2/3 h-full flex flex-col items-center justify-center p-5 gap-5">
                <MyPosts/>
                <Favorites/>
            </div>
        </div>
    )
}