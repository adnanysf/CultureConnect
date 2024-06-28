'use client'


import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {colors} from "../colors/Color";
import CIcon from '@coreui/icons-react';
import { cilCalendar, cilUser, cilHome, cilAccountLogout, cilSend, cilFile, cilXCircle, cilPlus} from '@coreui/icons';



export const Filter = () => {
    return (
        <div
        className="rounded-lg"
        style={{width:"100%", height:"40%",backgroundColor:colors["Dark Blue"],borderRadius:"2rem" ,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}
        >

        </div>
    )
}
export const News = () => {
    const [isExpanded, setIsExpanded] = useState(false);



    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <motion.div
            className="flex items-center flex-col"
            style={{width:"100%", backgroundColor:colors["Dark Blue"], borderRadius:"2rem",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}
            initial={{ height: "5%" }}
            animate={{ height: isExpanded ? "40%" : "5%" }}
            
        >
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{width:"100%", height:"100%", backgroundColor:colors["Dark Blue"], borderRadius:"2rem"}}
                    >
                        <input placeholder="Title" className="p-4" style={{marginTop:"1rem", height:"10%", width:"95%", borderRadius:"1rem 1rem 0 0", 
                        borderBottom:"1px solid RGB(255,255,255,0.5)",outline:"none", backgroundColor:colors["Dark Blue"], color:"white"}}/>

                        <textarea placeholder="Content" className= "p-4" style={{resize:"none", height:"60%", width:"95%", 
                            borderBottom:"1px solid RGB(255,255,255,0.5)",outline:"none",backgroundColor:colors["Dark Blue"], color:"white"}}/>
                        <div style={{width:"100%", height:"20%", display:"flex",justifyContent:"center", gap:"2rem"}}>
                            <button className="rounded-lg p-1" style={{backgroundColor:colors["Dark Blue"], color:colors["offW"], width:"7%"}}><CIcon icon={cilSend}/></button>
                            <button className="rounded-lg p-1 " style={{backgroundColor:colors["Dark Blue"], color:colors["offW"], width:"7%"}}><CIcon icon={cilFile}/></button>
                            <select style={{backgroundColor:colors["Dark Blue"], color:colors["offW"], width:"22%", outline:"none"}}>
                                <option value="">Select tag</option>
                                <option value="tag1">Tag 1</option>
                                <option value="tag2">Tag 2</option>
                                <option value="tag3">Tag 3</option>
                            </select>
                            <button className="rounded-lg p-1 " style={{backgroundColor:colors["Dark Blue"], color:colors["offW"], width:"7%"}} onClick={() => setIsExpanded(!isExpanded)}><CIcon icon={cilXCircle} /></button>

                        </div>
                    </motion.div>
                    
                )}
            </AnimatePresence>
            { !isExpanded &&
            <motion.button 
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{backgroundColor:colors["Dark Blue"], color:colors["offW"], width:"7%", marginTop:"3px"}}
            onClick={handleClick}><CIcon icon={cilPlus} /></motion.button>
            }

        </motion.div>
    )
}

export const Info = () => {
    return (
        <div
        style={{width:"100%", height:"40%",backgroundColor:colors["Dark Blue"], borderRadius:"2rem",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}
        >

        </div>
    )
}