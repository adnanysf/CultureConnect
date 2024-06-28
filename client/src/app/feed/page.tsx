'use client'

import { useState } from "react";
import { Menu, Title } from "../components/menu/Menu";
import {colors} from "../components/colors/Color";
import { Filter, News } from "../components/filter/filter";
import CIcon from '@coreui/icons-react';
import { Post } from "../components/posts/Post";
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
            <div className="w-full h-full flex flex-col items-center gap-10" style={{backgroundColor: colors["offW"], 
            borderRadius: "2rem", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)", overflowY: "auto", padding:"2rem 0"}}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>

                </div>
            </div>
        </main>
    )
}