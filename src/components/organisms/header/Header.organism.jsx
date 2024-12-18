import React, { useEffect, useState } from 'react'
import './HeaderComponent.scss';
import teleperformanceIconAsset from '../../../assets/teleperformance.png'
import { Link } from 'react-router-dom'; 
import ConfirmDialogComponent from '../dialogs/ConfirmDialogComponent';
import LoadingDialogComponent from '../dialogs/LoadingDialogComponent';
import MessageDialogComponent from '../dialogs/MessageDialogComponent';
import { useSelector } from 'react-redux';

const HeaderOrganism = (props) => {

    const confirmDialogData = useSelector(redux => redux?.uiComponentState);
    const [confirmDialog, setConfirmDialog] = useState({});
    
    const [activeTab, setActiveTab] = useState({
        manageLink : false,
        manageCategory : false,
    });

    const tablLinkOnClick = (tabName) => {
        let tabs = activeTab;
        tabs = {
            manageLink : false,
            manageCategory : false
        };
        tabs[tabName] = true;
        setActiveTab(tabs);
    }
 
    useEffect(() => {
        setConfirmDialog(confirmDialogData?.confirmDialog); 
    }, [confirmDialogData])


    
    return(<React.Fragment>
        <div className='HeaderComponent'>
            <div className='header-body'>
                <img src={teleperformanceIconAsset} className='tpIcon' alt="" />
                <div className='pageButtons'>
                    <Link htmlFor="" to={"/manage/links"} className={activeTab.manageLink ? "label-active":""} onClick={() => tablLinkOnClick("manageLink")}>Manage Links</Link>
                    <Link htmlFor="" to={"/manage/category"} className={activeTab.manageCategory ? "label-active":""}  onClick={() => tablLinkOnClick("manageCategory")}>Manage Category</Link>
                </div>
                <div className='userCol'>
                    <img src="https://sa.kapamilya.com/absnews/abscbnnews/media/2020/entertainment/09/02/20200902-jose-mari-chan.jpg?ext=.jpg" alt="" />
                    <div className='userInfo'>
                        <p>Jose Marie Chan</p>
                        <small>Administrator</small>
                    </div>
                </div>
            </div>
        </div> 
        {confirmDialog.isShow && <ConfirmDialogComponent />}    
        {confirmDialogData?.loadingDialog?.status && <LoadingDialogComponent />}
        {confirmDialogData?.messageDialog?.isShow && <MessageDialogComponent />}
    </React.Fragment>)
}

export default HeaderOrganism;