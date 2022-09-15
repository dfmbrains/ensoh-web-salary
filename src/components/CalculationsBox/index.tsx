import React, {FC, useRef} from 'react';
import './calculationsBox.scss';
import EditIcon from '../../assets/icons/edit.svg';
import ClockIcon from '../../assets/icons/clock.svg';

interface PropsInterface {
    priority: string,
    status: boolean,
}

const CalculationsBox: FC<PropsInterface> = ({priority, status}) => {

    const fileRef: any = useRef();

    const chooseFileHandler = () => {
        fileRef.current.click()
    };

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
                    <h3 className="calculationsBox__edit_title">
                        {status && <span>8.24 :</span>} נחשב
                    </h3>
                    {status
                    && <div className={"calculationsBox__edit_input"}>
                        <p>אישור מחלה</p>
                        <button onClick={chooseFileHandler}>
                            <i className="ri-attachment-2"/>
                        </button>
                        <input ref={fileRef} hidden={true} type="file"/>
                    </div>
                    }
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
                        {status
                            ? <div>
                                <p className={"calculationsBox__info_descr calculationsBox__info_descr-flex"}>
                                    14:00
                                    <span>
                                        <i className="ri-user-line"/>
                                    </span>
                                </p>
                                <p className={"calculationsBox__info_descr calculationsBox__info_descr-flex calculationsBox__info_descr-margin-big"}>
                                    18:00
                                    <span>
                                        <i className="ri-user-line"/>
                                    </span>
                                </p>
                            </div>
                            : <p className={"calculationsBox__info_descr calculationsBox__info_descr-flex"}>
                                8:30
                                <span>
                                    <img src={ClockIcon} alt="ClockIcon"/>
                                </span>
                            </p>
                        }
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