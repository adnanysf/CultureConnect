'use client'

import { useState } from 'react';
import { colors } from '../colors/Color';

interface PostProps {
    className?: string;
}
export const Post: React.FC<PostProps> = ({ className }) => {
    return (
        <div
        className={`rounded-2xl ${className}`} style={{backgroundColor:colors["offW"], width:"90%", height:"100rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
        }}
        >
            <div className='p-5 flex gap-5' style={{width: "100%", height:"20%", borderBottom:"1px solid black"}}>
                <h1>Usernmae</h1>
                <h1>Location</h1>
                <h1>Tag</h1>
            </div>
            <div className='p-5' style={{width: "100%", height:"10rem", overflow:"scroll"}}>
                <h1 style={{fontSize:"2rem"}}>Title</h1>
                <h1>Content
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