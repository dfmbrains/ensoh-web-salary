import React, {useEffect} from 'react';
import {useState} from 'react';
import Calendar from "react-calendar";
import "./Calendar.scss"

const CalendApp = () => {

    const [date, setDate] = useState(new Date());

    const weekdays = ['ש','ו','ה','ד','ג','ב','א'];
    const workDays = [3, 1, 8, 7, 6, 5, 4, 15, 14, 13, 12, 19, 18, 25];
    const errorDays = [11, 21, 20];

    useEffect(()=>{
        document.querySelector('.react-calendar__month-view__weekdays')
            .querySelectorAll('abbr').forEach((item , idx)=>{
                item.textContent = weekdays.reverse()[idx]
        })
        document.querySelectorAll('.react-calendar__tile')
            .forEach((item, idx)=>{
                if (workDays.includes(+item.textContent) && !item.className.includes('active')){
                    item.classList.add('workDay')
                }
                else if (errorDays.includes(+item.textContent) && !item.className.includes('active')){
                    item.classList.add('errorDays')
                }
            })
    }, []);

    return (
        <div className='Calendar'>
            <div className='calendar-container'>
                <Calendar defaultValue={new Date()} locale="iw-IW" calendarType='Hebrew' onChange={setDate} value={date}/>
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