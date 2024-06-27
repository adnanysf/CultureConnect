'use client'

import { useState } from "react";
import { Menu, title } from "../components/menu/Menu";
import {colors} from "../components/colors/Color";
import { Filter, News } from "../components/filter/filter";

export default function Feed() {
    return(
        <main className="flex h-screen w-screen flex-row" style={{backgroundColor: colors["Off"]}}>
            <div className="h-full w-1/3 flex flex-col items-center p-5 gap-5">
                <div style={{color:colors["Dark Blue"], fontWeight:"700"}}>{title}</div>
                <Menu/>
                <Filter/>
                <News/>
            </div>
            <div className="h-full w-2/3 flex flex-col items-center p-5">
                <div className="w-full h-2/6 flex items-center p-5" style={{backgroundColor:colors["Dark Blue"], borderRadius:"2rem 2rem 0 0"}}>
                    <div className="flex flex-col items-center" style={{height:"90%", width:"80%"}}>
                        <input placeholder="Title" className="p-4" style={{height:"20%", width:"95%", borderRadius:"1rem 1rem 0 0", borderBottom:"1px solid RGB(0,0,0,0.25)",outline:"none"}}/>
                        <textarea placeholder="Content" className= "p-2" style={{resize:"none", height:"70%", width:"95%", borderRadius:"0 0 1rem 1rem",outline:"none"}}/>

                    </div>
                    <div>
                        <button className="p-2 rounded-lg" style={{backgroundColor:colors["Light Blue"]}}>Post</button>
                        
                    </div>
                </div>
                <div className="w-full h-4/6 flex items-center justify-center" style={{backgroundColor:colors["Dark Blue"],borderRadius:"0 0 2rem 2rem"}}>
                </div>
            </div>
        </main>
    )
}