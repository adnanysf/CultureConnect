'use client'


import { useState } from "react";
import {colors} from "../colors/Color";

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
    return (
        <div
        style={{width:"100%", height:"40%",backgroundColor:colors["Dark Blue"], borderRadius:"2rem",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)"}}
        >
        </div>
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