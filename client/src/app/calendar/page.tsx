import React from 'react';
import MyCalendar from '../components/calendar/Cal';
import { Menu, Title, ProfilePhoto } from "../components/menu/Menu";
import {Info} from "../components/filter/filter";
import {colors} from "../components/colors/Color";
import { Favorites, MyPosts } from "../components/profileComponents/profileViews";

const Calendar = () => (
    <div className="w-screen h-screen flex flex-row"  style={{backgroundColor: colors["offW"]}}>
    <div className="w-1/3 h-full flex flex-col items-center p-5 gap-5">
        <Title/>
        <Menu/>
        <Info/>
    </div>
    <div className="w-2/3 h-full flex flex-col items-center justify-center p-5 gap-5">
        <h1>Important Events</h1>
        <MyCalendar />
    </div>
</div>

);

export default Calendar;