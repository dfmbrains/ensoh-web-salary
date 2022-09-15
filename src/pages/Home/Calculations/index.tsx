import React from 'react';
import './calculations.scss';
import CalendarIcon from '../../../assets/icons/calendarIcon.svg';
import CalculationsBox from "../../../components/CalculationsBox";
import DailyResume from "../DailyResume";

const Calculations = () => {
    return (
        <div className={"calculations homeBox"}>
            <h2 className="calculations__title">
                21 אוקטובר
                <span>
                    <img src={CalendarIcon} alt="CalendarIcon"/>
                </span>
            </h2>
            <div className="calculations__list">
                <CalculationsBox priority={"#EF4030"}/>
                <CalculationsBox priority={"#F58420"}/>
            </div>
            <div className="calculations__resume">
                <DailyResume/>
            </div>
        </div>
    );
};

export default Calculations;