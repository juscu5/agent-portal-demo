import React, {useState} from "react";
import './CategoryComponent.scss';
import HeaderAtom from "../../atoms/HeaderAtom";
import ButtonAtom from "../../atoms/ButtonAtom";
import ContainerAtom from "../../atoms/ContainerAtom";
import CategoryChildComponent from "./components/CategoryChildComponent";
import CategorySetupComponent from "./components/CategorySetupComponent";
import ConfirmDialogComponent from "../../organisms/dialogs/ConfirmDialogComponent";

const CategoryComponent = () => {

    const [newCategoryStatus, setNewCategoryStatus] = useState(false);
    const [tableState, setTableState] = useState([]); 


    const newSetupOnClick = (status) => {
        setNewCategoryStatus(status);
    }

    return(<React.Fragment>
              <div className="CategoryComponent">
                <div className="rowHeader">
                    <HeaderAtom className="title is-4">Manage Category</HeaderAtom>
                    <ButtonAtom className="button btn-pink is-rounded" onClick={() => newSetupOnClick(true)}>New Category</ButtonAtom>
                </div>
                {newCategoryStatus && <ContainerAtom content={<CategorySetupComponent onCancel={newSetupOnClick} tableState={tableState} setTableState={setTableState}/>}/>}
                <br/>
                <ContainerAtom content={<CategoryChildComponent  tableState={tableState} setTableState={setTableState}/>} />
              </div>
          </React.Fragment>)
}

export default CategoryComponent;