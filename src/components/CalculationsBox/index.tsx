import React, {FC} from 'react';
import './calculationsBox.scss';
import EditIcon from '../../assets/icons/edit.svg';
import ClockIcon from '../../assets/icons/clock.svg';

interface PropsInterface {
    priority: string
}

const CalculationsBox: FC<PropsInterface> = ({priority}) => {
    return (
        <div className={"calculationsBox"}>
            <h3 className="calculationsBox__title">סוג דיווח: עבודה</h3>
            <div className="calculationsBox__content">
                <div className="calculationsBox__edit">
                    <button className="calculationsBox__edit_btn">
                        ערוך
                        <span>
                        <img src={EditIcon} alt="EditIcon"/>
                    </span>
                    </button>
                    <h3 className="calculationsBox__edit_title">נחשב</h3>
                </div>
                <div className="calculationsBox__info">
                    <div>
                        <p className={"calculationsBox__info_text"}>הערת עובד</p>
                    </div>
                    <div>
                        <p className={"calculationsBox__info_text"}>הערת מערכת</p>
                        <p className={"calculationsBox__info_descr calculationsBox__info_descr-margin"}>חסרה יציאה</p>
                    </div>
                    <div>
                        <p className={"calculationsBox__info_descr"}>אנטוקולסקי</p>
                    </div>
                    <div>
                        <p className={"calculationsBox__info_descr calculationsBox__info_descr-flex"}>
                            8:30
                            <span>
                            <img src={ClockIcon} alt="ClockIcon"/>
                        </span>
                        </p>
                    </div>
                    <div>
                        <p className={"calculationsBox__info_text"}>כניסה</p>
                        <p className={"calculationsBox__info_text calculationsBox__info_text-margin"}>יציאה</p>
                    </div>
                </div>
                <div style={{background: `${priority}`}} className="calculationsBox__line"/>
            </div>
        </div>
    );
};

export default CalculationsBox;