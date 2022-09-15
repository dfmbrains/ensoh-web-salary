import React from 'react';
import './dailyResume.scss';

const DailyResume = () => {
    return (
        <div className="dailyResume">
            <div className="dailyResume__left">
                <h2 className="dailyResume__left_title">שעות נוספות</h2>
                <div className="dailyResume__left_box">
                    <div>
                        <p>125%</p>
                        <p>1.18</p>
                    </div>
                    <div>
                        <p>100%</p>
                        <p>0.18</p>
                    </div>
                </div>
            </div>
            <div className="dailyResume__right">
                <h2 className="dailyResume__right_title">סיכום יומי</h2>
                <div className="dailyResume__right_box">
                    <div className="dailyResume__right_box-left">
                        <p className="dailyResume__right_box-left-title">
                            עודף/חוסר
                            <i className="ri-arrow-down-line"/>
                        </p>
                        <p className="dailyResume__right_box-left-value">-0.36</p>
                    </div>
                    <div className="dailyResume__right_box-right">
                        <div>
                            <p className="dailyResume__right_box-right-text">בסיס</p>
                            <p className="dailyResume__right_box-right-text dailyResume__right_box-right-margin">משמרת</p>
                        </div>
                        <div>
                            <p className="dailyResume__right_box-right-descr">8.24</p>
                            <p className="dailyResume__right_box-right-descr dailyResume__right_box-right-margin">7.48</p>
                        </div>
                        <div>
                            <p className="dailyResume__right_box-right-descr-small">השלמת שעות</p>
                        </div>
                        <div>
                            <p className="dailyResume__right_box-right-text">נדרש</p>
                            <p className="dailyResume__right_box-right-text dailyResume__right_box-right-margin">נחשב</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dailyResume__bot">
                <div className="dailyResume__bot_left">
                    <p>השלמת שעות</p>
                </div>
                <div className="dailyResume__bot_right">
                    <p>הערת מערכת</p>
                </div>
            </div>
        </div>
    );
};

export default DailyResume;