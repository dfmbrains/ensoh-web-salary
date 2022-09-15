import React from 'react';
import './calculations.scss';
import CalendarIcon from '../../../assets/img/calendarIcon.svg';

const Calculations = () => {
    return (
        <div className={"calculations homeBox"}>
            <h2 className="calculations__title">
                21 אוקטובר
                <span>
                    <img src={CalendarIcon} alt="CalendarIcon"/>
                </span>
            </h2>
        </div>
    );
};

export default Calculations;