import React from 'react';
// @ts-ignore
import Logo from "./../../assets/icons/logo.svg";
import "./header.scss"
import {Link} from "react-router-dom";
import Human from "./../../assets/icons/human.svg";
import Group from "./../../assets/icons/group.svg";

const Index = () => {
    return (
        <div className="header">
            <div className="header__up">
                <img src={Logo} alt=""/>
                <div className="header__up_links">
                    <Link to="/">
                        <span> משאבי אנוש</span>
                        <img src={Group}/>
                    </Link>
                    <Link to="/">
                        <span> משאבי אנוש</span>
                        <img src={Human}/>
                    </Link>
                    <Link to="/">
                        <span> משאבי אנוש</span>
                        <img src={Human}/>
                    </Link>
                </div>
                <div>
                    גיליון נוכחות עירוני
                </div>
            </div>
            <div className="header__down">

            </div>
        </div>
    );
};

export default Index;