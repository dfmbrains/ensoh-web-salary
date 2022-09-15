import React from 'react';
import './calculations.scss';
import CalendarIcon from '../../../assets/icons/calendarIcon.svg';
import CalculationsBox from "../../../components/CalculationsBox";

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
        </div>
    );
};

export default Calculations;