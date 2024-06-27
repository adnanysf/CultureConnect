'use client'
import Link  from "next/link";
import CIcon from '@coreui/icons-react';
import { cilCalendar, cilUser, cilHome, cilAccountLogout} from '@coreui/icons';
import {colors} from "../colors/Color";

export const title = "CultureConnect | JPMorganChase"

export const  Menu = () => {
    const iconStyle = {
        width: "7%",
        color: colors["White"],

    }
    return(
        <main className="flex w-90 items-center justify-around" style={{width:"90%", height:"8%", backgroundColor:colors["Dark Blue"], borderRadius:"2rem"}}>
            <Link href='/' className="flex items-center justify-center h-full" style={iconStyle}><CIcon icon={cilHome}/></Link>
            <Link href='/' className="flex items-center justify-center h-full" style={iconStyle}><CIcon icon={cilUser}></CIcon></Link>
            <Link href='/' className="flex items-center justify-center h-full" style={iconStyle}><CIcon icon={cilCalendar}/></Link>
            <Link href='/' className="flex items-center justify-center h-full" style={iconStyle}><CIcon icon={cilAccountLogout}/></Link>
        </main>
    )
}