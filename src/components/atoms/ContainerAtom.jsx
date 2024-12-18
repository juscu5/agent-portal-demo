import React from "react";
import './Atoms.scss';

const defaultData = {
    content : {}
}

const ContainerAtom = (props = defaultData) => { 
    return (<React.Fragment>
        <div className="ContainerAtom">
            {props?.content}
        </div>
    </React.Fragment>);
} 
export default ContainerAtom;