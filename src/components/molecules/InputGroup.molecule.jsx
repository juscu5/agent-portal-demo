import React from 'react'
import LabelAtom from '../atoms/LabelAtom';
import InputAtom from '../atoms/InputAtom';
import './molecules.scss'

const format = {
    label :{},
    input :{}
}

const InputGroup = (props) => {

    return(<React.Fragment>
        <div className="form-group">
            <LabelAtom {...props?.label}>{props?.label?.title}</LabelAtom>
            <InputAtom {...props?.input} autoComplete="off"/>
        </div>
    </React.Fragment>)
}

export default InputGroup;