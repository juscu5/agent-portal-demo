import React, { useEffect, useState } from "react";
import ButtonAtom from "../../../atoms/ButtonAtom";
import LabelAtom from "../../../atoms/LabelAtom";
import HeaderAtom from "../../../atoms/HeaderAtom";
import SelectAtom from "../../../atoms/SelectAtom";
import InputAtom from "../../../atoms/InputAtom";
import TableOrganism from "../../../organisms/table/Table.organism";
import axios from "axios";
import "./ClientLinksNewSetup.scss";
import * as managerUI from '../../../../manager/UIComponentStateManager';
import { useDispatch } from "react-redux";

const ClientLinksNewSetup = (props) => {
  const [tableData, setTableData] = useState({
    header: [],
    body: []
  }); 


  useEffect(() => {
    setTableData({
      header: [],
      body: []
    });
    categoryOnLoad();
  },[]);

  const dispatch = useDispatch();

  const categoryOnLoad = () => {
    managerUI.setLoadingDialogStatus(dispatch, {status : true});
    axios.get(`${process.env.REACT_APP_API_ROOT}/category`).then((result) => { 
      setTableData({
        header: [{content:"", columnStyle : {}},{content:"Platform", columnStyle : {}},{content:"Link", columnStyle : {}}], 
        body : result?.data?.map((obj) => [{
            content: obj?.category_name,
            columnStyle: {}
          },{
            content: <InputAtom className="input"/>,
            columnStyle : {}
          },{
            content: <InputAtom className="input"/>,
            columnStyle : {}
          }])
      });
      managerUI.setLoadingDialogStatus(dispatch, {status : false});
    }).catch(e => {
        console.log(e);
        managerUI.setLoadingDialogStatus(dispatch, {status : false});
  });
}

  return (
    <React.Fragment>
      <div className="ClientLinksNewSetup">
        <div className="forTable">
          <div className="column">
            <th className="newSetupTitle">
              <HeaderAtom className="subtitle is-4">New Setup</HeaderAtom>
            </th>
            <br /> 
            <div className="NewSetupClass">
               <div className="form-group">
                  <LabelAtom className="label">Client</LabelAtom>
                  <SelectAtom className="input">
                      <option>All</option>
                  </SelectAtom>
               </div>
               <div className="form-group">
                  <LabelAtom className="label">Company</LabelAtom>
                  <SelectAtom className="input">
                      <option>All</option>
                  </SelectAtom>
               </div>
            </div>
            <br />
            <TableOrganism {...tableData}/> 
            <br/>
            <div className="button-footer">
                <ButtonAtom className="button btn-pink btn-footer is-rounded">Submit</ButtonAtom>
                <ButtonAtom className="button is-danger is-outlined is-rounded" onClick={() => props.onCancel(false)}>Cancel</ButtonAtom> 
            </div>  
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientLinksNewSetup;
