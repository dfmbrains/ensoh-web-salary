import React from 'react';
import "./headerDown.scss";
import Printer from "../../../assets/icons/printer.svg";
import AddDate from "../../../assets/icons/addDate.svg";
import Picked from "../../../assets/icons/Picked.svg";
import Empty from "../../../assets/icons/Empty.svg";
import Verify from "../../../assets/icons/verify.svg";
import Time from "../../../assets/icons/time.svg";
import Charge from "../../../assets/icons/charge.svg";

const HeaderDown = () => {

    return (
        <div className="header__down">
            <div className="header__down_actualCard">
                <p className={"header__down_actualCard-subtitle"}>חישוב אחרון</p>
                <p className={"header__down_actualCard-date"}>11.12.2022</p>
            </div>
            <div className="header__down_right">
                <div className="header__down_first">
                    <div className="header__down_iconCard">
                        <img src={Printer} alt="printer"/>
                        <span className="title">הדפסה</span>
                    </div>
                    <div className="header__down_iconCard">
                        <img src={AddDate} alt="printer"/>
                        <span className="title">צור דיווח</span>
                        <span className="title">חדש</span>
                    </div>
                </div>
                <div className="header__down_dates">
                    <div className="header__down_iconCard">
                        <img src={Picked} alt="printer"/>
                        <span className="title">גיליון</span>
                        <span className="title">חודשי</span>
                    </div>
                    <div className="header__down_iconCard">
                        <img src={Empty} alt="printer"/>
                        <span className="title">תצוגה</span>
                        <span className="title">יומית</span>
                    </div>
                </div>
                <div className="header__down_benefits">
                    <div className="header__down_iconCard">
                            <img src={Verify} alt="verify"/>
                        <span className="title">גיליון</span>
                        <span className="title">אושר</span>
                    </div>
                    <div className="header__down_iconCard">

                        <div className="lines">
                            <span></span>
                            <img src={Time} alt="time"/>
                            <span></span>
                        </div>
                        <span className="title">גיליון</span>
                        <span className="title">בהמתנה</span>
                    </div>
                    <div className="header__down_iconCard">
                        <img src={Charge} alt="charge"/>
                        <span className="title">גיליון</span>
                        <span className="title">פעיל</span>
                    </div>
                </div>
                <div className="header__down_profile">

                    <div className="info">
                        <div>
                            <span className="name">ישראל ישראלי</span>
                            <span className="number">מ"ז</span>
                            <span className="number">235478965</span>
                        </div>
                        <span className="subInfo">דיווח נוכחות ל: ישראל ישראלי</span>
                    </div>
                    <div className={"header__down_profile-img"}>
                        <div>
                            <i className="ri-user-fill"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDown;