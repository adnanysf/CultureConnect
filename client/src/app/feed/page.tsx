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
        </main>
    )
}