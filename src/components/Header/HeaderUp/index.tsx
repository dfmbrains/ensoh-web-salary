import React from 'react';
import Logo from "../../../assets/icons/logo.svg";
import {NavLink} from "react-router-dom";
import Group from "../../../assets/icons/group.svg";
import Human from "../../../assets/icons/human.svg";
import Header_logo from "../../../assets/icons/Header_logo.svg";
import "./headerUp.scss"

const Index = () => {
    return (
        <div className="header__up">
            <img src={Logo} alt=""/>
            <div className="header__up_links">
                <NavLink to="/1">
                    <span> משאבי אנוש</span>
                    <img src={Group}/>
                </NavLink>
                <NavLink to="/2">
                    <span>ניהול עובדים</span>
                    <img src={Human}/>
                </NavLink>
                <NavLink to="/home">
                    <span>ראשי</span>
                    <img src={Human}/>
                </NavLink>
            </div>
            <div className="header__up_right">
                <h2>גיליון נוכחות עירוני</h2>
                <img src={Header_logo} alt=""/>
            </div>
        </div>
    );
};

export default Index;