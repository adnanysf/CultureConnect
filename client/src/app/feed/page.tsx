'use client'

import { useState } from "react";
import { Menu, Title } from "../components/menu/Menu";
import {colors} from "../components/colors/Color";
import { Filter, News } from "../components/filter/filter";
import CIcon from '@coreui/icons-react';
import { cilCalendar, cilUser, cilHome, cilAccountLogout, cilSend, cilFile} from '@coreui/icons';

export default function Feed() {
    return(
        <main className="flex h-screen w-screen flex-row" style={{backgroundColor: "#edeef0"}}>
            <div className="h-full w-1/3 flex flex-col items-center p-5 gap-5">
                <Title/>
                <Menu/>
                <News/>
                <Filter/>
            </div>
            <div className="h-full w-2/3 flex flex-col items-center p-5">
                {/* style={{backgroundColor:colors["Off"]}}*/}
                {/* <div className="w-full h-2/6 flex items-center justify-center flex-row"> 
                    <div className="h-full flex flex-col" style={{width:"85%"}}>

                        <input placeholder="Title" className="p-4" style={{height:"10%", width:"95%", borderRadius:"1rem 1rem 0 0", 
                        borderBottom:"1px solid RGB(0,0,0,1)",outline:"none", backgroundColor:colors["offW"], color:"black" ,boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}/>

                        <textarea placeholder="Content" className= "p-4" style={{resize:"none", height:"75%", width:"95%", 
                        borderRadius:"0 0 1rem 1rem",outline:"none",backgroundColor:colors["offW"], color:"black",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}/>
                    </div>
                        <div className="flex flex-col gap-3 items-center mt-1 justify-center" style={{height:"100%", width:"15%"}}>
                            <button className="rounded-lg p-1" style={{backgroundColor:colors["Dark Blue"], color:colors["offW"], width:"30%"}}><CIcon icon={cilSend}/></button>
                            <button className="rounded-lg p-1 " style={{backgroundColor:colors["Dark Blue"], color:colors["offW"], width:"30%"}}><CIcon icon={cilFile}/></button>

                        </div>
                        
                

                </div> */}
                <div className="w-full h-full flex items-center justify-center" style={{backgroundColor:colors["offW"],borderRadius:"2rem 2rem 2rem 2rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}>
                </div>
            </div>
        </main>
    )
}