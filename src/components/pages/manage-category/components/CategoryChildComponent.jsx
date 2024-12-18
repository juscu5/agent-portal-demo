import React, { useState, useEffect } from "react";
import './CategoryChildComponent.scss';  
import './CategoryChildComponent.scss'; 
import axios from "axios";  
import TableColumnButtonComponent from './TableColumnButtonComponent';
import useForceUpdate from 'use-force-update';
import { useDispatch, useSelector } from "react-redux"; 
import * as manageCategory from '../../../../manager/ManageCategoryStateManager';
import * as managerUI from '../../../../manager/UIComponentStateManager';


const CategoryChildComponent = (props) => {


    const dispatch = useDispatch();
    useEffect(() => {  
        loadCategoryData();  
    }, []); 

    const loadCategoryData = () => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/category`).then((result) => { 
            const finalResult = result.data?.map(obj => {
                return {
                    category_id : obj.category_id,
                    category_name : obj.category_name,
                    status : obj.status,
                     isShowEditBtnStatus : true
                }
            })
            props.setTableState(finalResult) 
        }).catch(e => {
            console.log(e);
        });
    }

    const forceUpdate = useForceUpdate();

    const tableIndexStatusChange = (index, status) => {  
        let tempTableData = props?.tableState;
        tempTableData[index] = {...tempTableData[index], isShowEditBtnStatus : status};
        props.setTableState(tempTableData);
        forceUpdate();   
    }

    const saveCategoryName = (event, id, index, categoryName) => {
        let result = {
            header : "Confirm Dialog",
            type : "SUCCESS",
            message : "Do you really want to save?", 
            isShow : true,
            onConfirm(){
                onConfirmExecute(event, id, index, categoryName)
            }     
        }
        managerUI.setConfirmDialog(dispatch, result); 
    }

    const onConfirmExecute = (event, id, index, categoryName) => {  
        managerUI.setLoadingDialogStatus(dispatch, {status : true});
        let data = {
            "categoryId" : id,
            "categoryName": categoryName,
            "status" : true,
        }
        axios.put(process.env.REACT_APP_API_ROOT + "/category/update", data).then(result => { 
            let tempTableData = props.tableState;
            tempTableData[index] = {...tempTableData[index], isShowEditBtnStatus : true, category_name : categoryName};
            props.setTableState(tempTableData);
            managerUI.setLoadingDialogStatus(dispatch, {status : false});
            forceUpdate();  
            managerUI.setConfirmDialogCancel(dispatch);
            managerUI.setMessageDialog(dispatch, {
                message : "Successfuly update category",
                category : "SUCCESS",
                type : "SUCCESS",
                isShow : true,
                interval: 5000
            });
        }).catch(e => {
            managerUI.setLoadingDialogStatus(dispatch, {status : false});
            console.log(e);
        })
        managerUI.setConfirmDialogCancel(dispatch);
    }

    return (
        <React.Fragment>
            <div className="categoryTable">
                <table className="table is-fullwidth is-borderless">
                    <thead>
                        <tr>
                            <th style={{width: "300px"}}>Action</th> 
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props?.tableState?.map((obj, index) => <TableColumnButtonComponent  key={`tblRow${index}`} data={obj} tableIndexStatusChange={tableIndexStatusChange} saveCategoryName={saveCategoryName} index={index}/>)
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default CategoryChildComponent;
