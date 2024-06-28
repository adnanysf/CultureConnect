'use client'


import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {colors} from "../colors/Color";
import CIcon from '@coreui/icons-react';
// import axios from 'axios';
import { cilCalendar, cilUser, cilHome, cilAccountLogout, cilSend, cilFile, cilXCircle, cilPlus} from '@coreui/icons';

interface PostProps {


}

interface FilterProps {
    setSelectedTag: (tag: string) => void;
}


export const Filter: React.FC<FilterProps> = ({ setSelectedTag }) => {
    const [posts, setPosts] = useState([]);
    const allTags = ["All","Recipes", "Experiences", "Landmarks", "Global Holiday", "Diversity/Inclusion", "Organizations", "Emergency"];


    return (
        <div
            className="rounded-lg"
            style={{ width: "100%", height: "40%", backgroundColor: colors["Dark Blue"], borderRadius: "2rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
            {/* show all tags and create a checkbox where it can only select on tag and filters based on tbhat */
            }
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", gap: "0.5rem", flexDirection:"column"}}>
                {allTags.map((tag) => (
                    <button
                        style={{ backgroundColor: colors["Dark Blue"], color: colors["offW"], width: "7%", marginLeft:"1rem" }}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
                </div>

        </div>
    );
}
export const News:React.FC<PostProps>  = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [postTitle, setPostTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState([""]);
    const [postData, setPostData] = useState({});

    const createPost = async () => {
        const newPostData = {
            userSid : "O803101",
            tags: tag,
            title: postTitle,
            text: content,
            image: "",
            firm: "Houston, Texas",
        };
        setPostData(newPostData);
    
        try {
            const response = await fetch('http://127.0.0.1:5000/createUserPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPostData),
            }).then((response) => response.json()).then((data) => {
                
                console.log(data)
                window.location.reload();
            
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            className="flex items-center flex-col"
            style={{ width: "100%", backgroundColor: colors["Dark Blue"], borderRadius: "2rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)" }}
            initial={{ height: "5%" }}
            animate={{ height: isExpanded ? "40%" : "5%" }}
        >
            <AnimatePresence>
                {isExpanded && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: "100%", height: "100%", backgroundColor: colors["Dark Blue"], borderRadius: "2rem" }}>
                        <input placeholder="Title" className="p-4"
                            style={{
                                marginTop: "1rem", height: "10%", width: "95%", borderRadius: "1rem 1rem 0 0",
                                borderBottom: "1px solid RGB(255,255,255,0.5)", outline: "none", backgroundColor: colors["Dark Blue"], color: "white"
                            }}
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                        />
                        <textarea placeholder="Content" className="p-4"
                            style={{
                                resize: "none", height: "60%", width: "95%",
                                borderBottom: "1px solid RGB(255,255,255,0.5)", outline: "none", backgroundColor: colors["Dark Blue"], color: "white"
                            }}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <div style={{ width: "100%", height: "20%", display: "flex", justifyContent: "center", gap: "2rem" }}>
                            <button
                                className="rounded-lg p-1"
                                style={{ backgroundColor: colors["Dark Blue"], color: colors["offW"], width: "7%" }}
                                onClick={createPost}
                            >
                                <CIcon icon={cilSend} />
                            </button>
                            <button className="rounded-lg p-1" style={{ backgroundColor: colors["Dark Blue"], color: colors["offW"], width: "7%" }}>
                                <CIcon icon={cilFile} />
                            </button>
                            <select
                                style={{ backgroundColor: colors["Dark Blue"], color: colors["offW"], width: "22%", outline: "none" }}
                                value={tag}
                                onChange={(e) => setTag([e.target.value])}
                            >
                                <option value="">Select tag</option>
                                <option value=">Recipes">Recipes</option>
                                <option value="Experiences">Experiences</option>
                                <option value="Landmarks">Landmarks</option>
                                <option value="Global Holiday">Global Holiday</option>
                                <option value="Diversity/Inclusion">Diversity/Inclusion</option>
                                <option value="Organizations">Organizations</option>
                                <option value="Emergency">Emergency</option>




                            </select>
                            <button
                                className="rounded-lg p-1"
                                style={{ backgroundColor: colors["Dark Blue"], color: colors["offW"], width: "7%" }}
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                <CIcon icon={cilXCircle} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!isExpanded && (
                <motion.button
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ backgroundColor: colors["Dark Blue"], color: colors["offW"], width: "7%", marginTop: "3px" }}
                    onClick={handleClick}
                >
                    <CIcon icon={cilPlus} />
                </motion.button>
            )}
        </motion.div>
    );
};

export const Info = () => {
    return (
        <div
        style={{width:"100%", height:"40%",backgroundColor:colors["Dark Blue"], borderRadius:"2rem",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}
        >

        </div>
    )
}