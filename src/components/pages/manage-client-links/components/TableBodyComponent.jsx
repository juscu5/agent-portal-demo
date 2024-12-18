import React, { useEffect, useState } from 'react';
import ButtonAtom from '../../../atoms/ButtonAtom';
import TableOrganism from '../../../organisms/table/Table.organism';
import InputAtom from '../../../atoms/InputAtom';
import './TableBodyComponent.scss';

const TableBodyComponent = () => {

    const [tableData, setTableData] = useState({
        header: [],
        body: []
      }); 
    
      useEffect(() => {
        setTableData({
          header: [{content:"", columnStyle : {}},{content:"Category", columnStyle : {}},{content:"Platform", columnStyle : {}},{content:"Link", columnStyle : {}}],
          body: [
                    [
                        {
                            content :  <div style={{display: "flex"}}>
                                <ButtonAtom className="button btn-purple is-rounded tableButtonCol">Update</ButtonAtom> &emsp;
                                <ButtonAtom className="button btn-pink-outline is-rounded tableButtonCol">Delete</ButtonAtom>
                            </div>,
                            columnStyle: {}
                        },
                        {
                            content : "Change Schedule",
                            columnStyle: {}
                        },
                        {
                            content :  <InputAtom className="input" />,
                            columnStyle: {}
                        },
                        {
                            content :  <InputAtom className="input" />,
                            columnStyle: {}
                        }
                    ],
                    [
                        {
                            content :  <div style={{display: "flex"}}>
                                <ButtonAtom className="button btn-purple is-rounded tableButtonCol">Update</ButtonAtom> &emsp;
                                <ButtonAtom className="button btn-pink-outline is-rounded tableButtonCol">Delete</ButtonAtom>
                            </div>,
                            columnStyle: {}
                        },
                        {
                            content : "Change Schedule",
                            columnStyle: {}
                        },
                        {
                            content :  <InputAtom className="input" />,
                            columnStyle: {}
                        },
                        {
                            content :  <InputAtom className="input" />,
                            columnStyle: {}
                        }
                    ],
                    [
                        {
                            content :  <div style={{display: "flex"}}>
                                <ButtonAtom className="button btn-purple is-rounded tableButtonCol">Update</ButtonAtom> &emsp;
                                <ButtonAtom className="button btn-pink-outline is-rounded tableButtonCol">Delete</ButtonAtom>
                            </div>,
                            columnStyle: {}
                        },
                        {
                            content : "Change Schedule",
                            columnStyle: {}
                        },
                        {
                            content :  <InputAtom className="input" />,
                            columnStyle: {}
                        },
                        {
                            content :  <InputAtom className="input" />,
                            columnStyle: {}
                        }
                    ]
                ]
        });
      },[]);
    
    return (<React.Fragment>
        <div className='TableBodyComponent'>
             <TableOrganism {...tableData}/> 
            <div className="button-footer">
                <ButtonAtom className="button btn-pink btn-footer is-rounded">Save</ButtonAtom>
                <ButtonAtom className="button is-danger is-outlined is-rounded">Cancel</ButtonAtom> 
            </div> 
        </div>
    </React.Fragment>);
}

export default TableBodyComponent;