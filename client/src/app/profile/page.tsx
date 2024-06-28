'use client'

import { useState } from "react";
import { Menu, Title, ProfilePhoto } from "../components/menu/Menu";
import {Info} from "../components/filter/filter";
import {colors} from "../components/colors/Color";
import { Favorites, MyPosts } from "../components/profileComponents/profileViews";


export default function Profile() {
    return(
        <div className="w-screen h-screen flex flex-row"  style={{backgroundColor: colors["Off"]}}>
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-5 gap-5">
                <Title/>
                <Menu/>
                <ProfilePhoto/>
                <Info/>
            </div>
            <div className="w-2/3 h-full flex flex-col items-center justify-center p-5 gap-5">
                <MyPosts/>
                <Favorites/>
            </div>
        </div>
    )
}