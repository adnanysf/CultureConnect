'use client'

import { useState } from 'react';
import { colors } from '../colors/Color';
import CIcon from '@coreui/icons-react';
import { cilCalendar, cilUser, cilHome, cilAccountLogout, cilSend, cilFile, cilHeart, cilThumbUp} from '@coreui/icons';


interface PostProps {
    className?: string;
    date: string;
    timestamp: string;
    user: string;
    tags: string;
    title: string;
    text: string;
    image: string;
    firm: string;
    likes: number;

}
export const Post: React.FC<PostProps> = ({ className, date, timestamp, user, tags, title, text, image, firm, likes }) => {
    return (
        <div
        className={`rounded-2xl ${className}`} style={{backgroundColor:colors["offW"], width:"90%", minHeight:"35%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
        }}
        >
            <div className='p-5 flex gap-5' style={{width: "100%", height:"20%", borderBottom:"1px solid", borderColor:colors['Dark Blue']}}>
                <h1>{user}</h1>
                <h1>{firm}</h1>
                <h1>{tags}</h1>
            </div>
            <div className='p-5' style={{width: "100%", height:"65%", overflowY:"scroll", whiteSpace:"normal", wordWrap:"break-word", borderBottom:"1px solid black"}}>
                <h1 style={{fontSize:"2rem"}}>{title}</h1>
                <h1>
                    {text}
                </h1>

            </div>
            <div style={{width:"80%", height:"15%", display:"flex", alignItems:"flex", marginLeft:"1rem", gap:"1rem"}}>
                <CIcon width={25} icon={cilHeart} />
                <CIcon width={25} icon={cilThumbUp} />

            </div>
        </div>
    )
}


export const UserPosts: React.FC<PostProps> = ({ className }) => {
    return (
        <div
        className={`rounded-2xl ${className}`} style={{backgroundColor:colors["offW"], width:"90%", height:"15rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
        marginTop:"1rem"}}
        >
            <div className='p-5 flex gap-5' style={{width: "100%", height:"20%", borderBottom:"1px solid", borderColor:colors['Dark Blue'],color:"black", fontSize:"1rem"}}>
                <h1>Usernmae</h1>
                <h1>Location</h1>
                <h1>Tag</h1>
            </div>
            <div className='p-5' style={{width: "100%", height:"10rem", overflow:"scroll"}}>
                <h1 style={{fontSize:"2rem", color:"black"}}>Title</h1>
                <h1 style={{color:"black", fontSize:"1rem"}}>Content
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent

                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                ContentContentContentContentContentContent
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                </h1>

            </div>
        </div>
    )
}