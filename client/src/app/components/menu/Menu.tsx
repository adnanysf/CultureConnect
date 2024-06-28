'use client'
import Link  from "next/link";
import CIcon from '@coreui/icons-react';
import { cilCalendar, cilUser, cilHome, cilAccountLogout} from '@coreui/icons';
import {colors} from "../colors/Color";
import { useState } from "react";
export const title = "CultureConnect | JPMorganChase"
export const Title = () => {
    return (
        <div style={{color:colors["Dark Blue"], fontWeight:"700"}}>{title}</div>
    )
}
export const  Menu = () => {
    const [hoveredLink, setHoveredLink] = useState<String | null>("");

    const iconStyle = (link: String) => ({
        width: "7%",
        color: colors["White"],
        opacity: link === hoveredLink ? "1" : "0.6",
    });

    return(
        <main className="flex w-90 items-center justify-around shadow" style={{width:"90%", height:"8%", backgroundColor:colors["Dark Blue"], borderRadius:"2rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}>
            <Link href='/feed' className="flex items-center justify-center h-full" style={iconStyle('home')} onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)}><CIcon icon={cilHome}/></Link>
            <Link href='/profile' className="flex items-center justify-center h-full" style={iconStyle('user')} onMouseEnter={() => setHoveredLink('user')} onMouseLeave={() => setHoveredLink(null)}><CIcon icon={cilUser}></CIcon></Link>
            <Link href='/' className="flex items-center justify-center h-full" style={iconStyle('calendar')} onMouseEnter={() => setHoveredLink('calendar')} onMouseLeave={() => setHoveredLink(null)}><CIcon icon={cilCalendar}/></Link>
            <Link href='/' className="flex items-center justify-center h-full" style={iconStyle('logout')} onMouseEnter={() => setHoveredLink('logout')} onMouseLeave={() => setHoveredLink(null)}><CIcon icon={cilAccountLogout}/></Link>
        </main>
    )
}

export const ProfilePhoto = () => {
    return (
        <div style={{width:"60%", height:"40%", backgroundColor:colors["Dark Blue"], borderRadius:"50%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
            justifyContent:"center", alignItems:"center", display:"flex", color:colors["White"], fontSize:"5rem", fontWeight:"700"
        }}>
            AY
        </div>
    )
}