'use client'
import React, { useState } from 'react';
import Calendar, { CalendarProps, CalendarTileProperties } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type DateValue = CalendarProps['value'];

const Cal = () => {
  const [date, setDate] = useState<DateValue>(new Date());

  const events = [
    { date: '2022-12-25', event: 'Christmas' },
    { date: '2022-01-01', event: 'New Year' },
  ];

  const onChange = (value: DateValue) => {
    setDate(value);
  };

  const tileContent = ({ date, view ,activeStartDate}: CalendarTileProperties) => {
    if (view === 'month') {
        const event = events.find(e => new Date(e.date).toDateString() === date.toDateString());
        if (new Date(date).getMonth() !== new Date(activeStartDate).getMonth()) {
          const currentMonthEvents = events.filter(e => new Date(e.date).getMonth() === new Date(activeStartDate).getMonth());
          console.log('Events for this month:', currentMonthEvents);
        }
        return event ? <p>{event.event}</p> : null;
      }
    };

  return (
    <div style={{scale:"2"}}>
      <Calendar
        onChange={onChange}
        value={date}
        tileContent={tileContent}
      />
    </div>
  );
};

export default Cal;