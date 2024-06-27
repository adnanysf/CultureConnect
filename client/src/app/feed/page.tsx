'use client'

import { useState } from "react";
import { Menu, Title } from "../components/menu/Menu";
import {colors} from "../components/colors/Color";
import { Filter, News } from "../components/filter/filter";

export default function Feed() {
    return(
        <main className="flex h-screen w-screen flex-row" style={{backgroundColor: colors["Off"]}}>
            <div className="h-full w-1/3 flex flex-col items-center p-5 gap-5">
                <Title/>
                <Menu/>
                <Filter/>
                <News/>
            </div>
            <div className="h-full w-2/3 flex flex-col items-center p-5">
                {/* 212326 */}
                <div className="w-full h-2/6 flex items-center justify-center flex-col" style={{backgroundColor:colors["Off"]}}> {}


                        <input placeholder="Title" className="p-4" style={{height:"10%", width:"95%", borderRadius:"1rem 1rem 0 0", 
                        borderBottom:"1px solid RGB(0,0,0,0.25)",outline:"none", backgroundColor:colors["Off"], color:"white", border:"1px solid white"}}/>

                        <textarea placeholder="Content" className= "p-4" style={{resize:"none", height:"75%", width:"95%", 
                        borderRadius:"0 0 1rem 1rem",outline:"none",backgroundColor:colors["Off"],border:"1px solid white", color:"White"}}/>

                        <div className="flex flex-row gap-3 items-center mt-1" style={{height:"25%", width:"100%"}}>
                            <button className="ml-5 rounded-lg p-1" style={{backgroundColor:colors["Dark Blue"], color:colors["Off"]}}>Post</button>
                            <button className="rounded-lg p-1 " style={{backgroundColor:colors["Dark Blue"], color:colors["Off"], width:"15%"}}>Add Photos</button>

                        </div>
                        
                

                </div>
                <div className="w-full h-4/6 flex items-center justify-center" style={{backgroundColor:colors["Dark Blue"],borderRadius:"2rem 2rem 2rem 2rem"}}>
                </div>
            </div>
        </main>
    )
}