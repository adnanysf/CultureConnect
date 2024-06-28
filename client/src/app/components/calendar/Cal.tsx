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

  const tileContent = ({ date, view }: CalendarTileProperties) => {
    if (view === 'month') {
      const event = events.find(e => new Date(e.date).toDateString() === date.toDateString());
      return event ? <p>{event.event}</p> : null;
    }
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        tileContent={tileContent}
      />
    </div>
  );
};

export default Cal;