import React, { useEffect, useState } from "react";
import './MessageDialogComponent.scss'
import icon_danger from '../../../assets/icon/icon_danger.svg';
import icon_success from '../../../assets/icon/icon_success.svg';
import { useSelector } from "react-redux";
import * as managerUI from '../../../manager/UIComponentStateManager';
import { useDispatch } from "react-redux";

const defaultValue = {
    message : "",
    category : "",
    type : "SUCCESS"
}

const MessageDialogComponent = () => {

    const messageState = useSelector(redux => redux?.uiComponentState?.messageDialog)
    const [msgState, setMsgState] = useState({});
    const dispatch = useDispatch();
    useEffect(() => { 
        setMsgState(messageState); 
        setTimeout(() => {
            managerUI.setMessageDialog(dispatch, {
                message : "",
                category : "",
                type : "",
                isShow : false,
                interval: 5000
            });
        }, 5000);
    },[messageState]);

    return (<React.Fragment>
        <div className="MessageDialogComponent">
            <div className="progress-bar">
                <div className="progress-fill" style={{width : (msgState?.isShow ? "100%" : "0%")}}></div>
            </div>
            <div className="dialog-details"> 
                <div className="icon-sec">
                    {msgState.type === "SUCCESS" && <img src={icon_success} alt="" />}
                    {msgState.type === "DANGER" && <img src={icon_danger} alt="" />}
                    {msgState.type === "WARNING" && <img src={icon_danger} alt="" />} 
                </div>
                <div className="info-sec">
                    <label>{msgState?.message}</label>
                    <small>{msgState?.category}</small>
                </div>
            </div>
        </div>
    </React.Fragment>)
}


export default MessageDialogComponent;