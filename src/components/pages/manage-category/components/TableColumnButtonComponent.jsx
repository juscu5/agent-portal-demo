import React, { useEffect, useState } from "react";
import ButtonAtom from "../../../atoms/ButtonAtom"; 
import InputAtom from "../../../atoms/InputAtom";
import './TableColumnButtonComponent.scss'

// const defaultData = {
//     index : Number
// }


const TableColumnButtonComponent = (props) => { 
    
    const [inputChange, setInputChange] = useState("");

    useEffect(() => {
        setInputChange(props.data.category_name);
    },[])

    const inputChangeEvent = (event) => {
        setInputChange(event.target.value);
    }

    return (<React.Fragment>
         <tr>
            <td className="buttonColumn">
                {props?.data?.isShowEditBtnStatus && <ButtonAtom className="button btn-purple is-rounded button-edit" onClick={() => props?.tableIndexStatusChange(props?.index, false)}>Edit</ButtonAtom>}
                {!props?.data?.isShowEditBtnStatus && <ButtonAtom className="button btn-purple is-rounded button-left" onClick={(e) => props?.saveCategoryName(e, props?.data?.category_id, props?.index, inputChange)}>Save</ButtonAtom>}
                {!props?.data?.isShowEditBtnStatus && <ButtonAtom className="button btn-pink-outline is-rounded button-right" onClick={() => props?.tableIndexStatusChange(props?.index, true)}>Cancel</ButtonAtom>}
            </td> 
            <td>
                {props?.data?.isShowEditBtnStatus && props?.data?.category_name} 
                {!props?.data?.isShowEditBtnStatus && <InputAtom className="input" onChange={inputChangeEvent} value={inputChange} style={{textAlign: "center"}}/>} 
            </td>
        </tr>
    </React.Fragment>)
}

export default TableColumnButtonComponent;
