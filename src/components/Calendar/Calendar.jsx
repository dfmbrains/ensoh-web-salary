import React from 'react';
import {useState} from 'react';
import Calendar from "react-calendar";
import "./Calendar.scss"

const CalendApp = () => {

    const [date, setDate] = useState(new Date());

    return (
        <div className='Calendar'>
            <div className='calendar-container'>
                <Calendar locale="iw-IW" calendarType='Hebrew' onChange={setDate} value={date}/>
            </div>
            <div className="tips">
                <div className="tip">
                    <span>יום עבודה</span>
                    <div style={{
                        width: '18px',
                        height: '18px', background: '#00B3F1', borderRadius: "50%"
                    }}></div>
                </div>
                <div className="tip">
                    <span>יום נבחר</span>
                    <div style={{
                        width: '18px',
                        height: '18px', background: '#00AC4F', borderRadius: "50%"
                    }}></div>
                </div>
                <div className="tip">
                    <span>קיימת שגיאה</span>
                    <div style={{
                        width: '18px',
                        height: '18px', background: '#EF4030', borderRadius: "50%"
                    }}></div>
                </div>
            </div>
        </div>
    );
};

export default CalendApp;