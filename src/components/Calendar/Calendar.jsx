import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import Calendar from "react-calendar";
import "./Calendar.scss"

const CalendApp = () => {

    const [date, setDate] = useState(new Date());
    const calendarRef = useRef(null);

    const workDays = [8, 5, 4];
    const errorDays = [11, 21, 20];



    const formatDay = (locale, date) => {
        const day = locale.toString().slice(0, 3)
        if (day === 'Sun') {
            return 'א'
        } else if (day === "Mon") {
            return 'ב'
        } else if (day === "Tue") {
            return 'ג'
        } else if (day === "Wed") {
            return 'ד'
        } else if (day === 'Thu') {
            return 'ה'
        } else if (day === "Fri") {
            return 'ו'
        } else {
            return 'ש'
        }
    }

    const classNamesTile = (obj) => {
        let nowDate = new Date().setHours(0,0, 0,0)
        if (obj.date.toJSON() === new Date(nowDate).toJSON()){
            console.log(obj.date, new Date(nowDate))
            return 'nowDate'
        }
        else if (workDays.includes(obj.date.getDate())){
            return 'workDay'
        }
        else if (errorDays.includes(obj.date.getDate())){
            return 'errorDays'
        }
    };

    return (
        <div className='Calendar'>
            <div className='calendar-container'>
                <Calendar tileClassName={(obj) => classNamesTile(obj)}
                          formatShortWeekday={(locale, date) => formatDay(date, 'dd')} defaultValue={new Date()}
                          locale="iw-IW" calendarType='Hebrew' onChange={setDate} value={date}/>
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