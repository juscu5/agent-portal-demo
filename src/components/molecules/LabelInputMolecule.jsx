import React from 'react';
import InputAtom from '../atoms/InputAtom';
import LabelAtom from '../atoms/LabelAtom';

const LabelInputMolecule = (props) => {

    return(<React.Fragment>
        <div {...props?.container}>
            <LabelAtom {...props?.label}>{props?.title}</LabelAtom>
            <InputAtom {...props?.input}/>
        </div>
    </React.Fragment>)
}

export default LabelInputMolecule;