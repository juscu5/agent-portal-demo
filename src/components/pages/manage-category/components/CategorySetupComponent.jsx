import React, { useState } from "react";
import "./CategorySetupComponent.scss";
import HeaderAtom from "../../../atoms/HeaderAtom";
import LabelAtom from "../../../atoms/LabelAtom";
import ButtonAtom from "../../../atoms/ButtonAtom";
import InputGroupMolecule from "../../../molecules/InputGroup.molecule";
import * as manageCategory from '../../../../manager/ManageCategoryStateManager';
import * as managerUI from '../../../../manager/UIComponentStateManager';
import { useDispatch } from "react-redux";
import useForceUpdate from "use-force-update";
import axios from "axios";

const CategorySetupComponent = (props) => {

  const [categoryNameState, setCategoryNameState] = useState("");
  const [categoryNameIsValid, setCategoryNameIsValid] = useState(true);
  const dispatch = useDispatch();
  const forceUpdate = useForceUpdate();
  const onSaveNewCategoryName = () => {

    if(categoryNameState == ""){
      setCategoryNameIsValid(false); 
      return;
    }

    let result = {
        header : "Confirm New Category",
        type : "SUCCESS",
        message : "Do you really want to save new category name?", 
        isShow : true,
        onConfirm(){
            saveNewCategoryExecute()
        }     
    }
    managerUI.setConfirmDialog(dispatch, result); 
  }

  const saveNewCategoryExecute = () => {
      managerUI.setLoadingDialogStatus(dispatch, {status : true});
      let data = { 
          "categoryName": categoryNameState,
          "status" : true,
      } 
      axios.post(process.env.REACT_APP_API_ROOT + "/category/create", data).then(result => {
          managerUI.setLoadingDialogStatus(dispatch, {status : false});  
          managerUI.setConfirmDialogCancel(dispatch);
          managerUI.setMessageDialog(dispatch, {
              message : "Successfuly save category",
              category : "SUCCESS",
              type : "SUCCESS",
              isShow : true,
              interval: 5000
          });
          setTimeout(() => {
            window.location.reload();
          }, 5000);
      }).catch(e => {
          managerUI.setLoadingDialogStatus(dispatch, {status : false});
          console.log(e);
      })
      managerUI.setConfirmDialogCancel(dispatch);
  }

  const onChangeCategoryName = (event) => { 
    setCategoryNameState(event.target.value);
    if(categoryNameState != ""){
      setCategoryNameIsValid(true);
    }
  }


  return (
    <React.Fragment>
      <div className="CategorySetupComponent">
        <div className="column">
          <th>
            <HeaderAtom className="subtitle is-4">New Category</HeaderAtom>
          </th>
          <br />
          <div className="NewSetupClass">
            <div className="form-group">
              <InputGroupMolecule
                  {...{
                    label: {
                      title: "Category Name",
                      htmlFor: "",
                      style: {
                          paddingLeft: "16px"
                      }
                    },
                    input: {
                      type: "text",
                      className: `input is-rounded${!categoryNameIsValid ? " is-danger" : ""}`,
                      placeholder: "Catgory Name",
                      value : categoryNameState,
                      onChange: (e) => onChangeCategoryName(e),
                      style: (!categoryNameIsValid ? {border: "1px solid #f14668 !important" } : {border : ""})
                    },
                  }}
                />
                {!categoryNameIsValid && <small className="has-text-danger">Category name is required</small>}
              </div>
          </div>
        </div>
        <div className="button-footer">
          <ButtonAtom className="button btn-pink btn-footer is-rounded" onClick={onSaveNewCategoryName}>
            Submit
          </ButtonAtom>
          <ButtonAtom onClick={() => props.onCancel(false)} className="button is-danger is-outlined is-rounded">
            Cancel
          </ButtonAtom>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategorySetupComponent;
