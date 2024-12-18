import React from 'react';
import './TableOrganism.scss';  

const defaultData = {
    header: [],
    body: []
};
 
const TableOrganism = (props = defaultData) => { 
    return (<React.Fragment> 
        <div className="TableOrganism">
            <table className="table is-fullwidth is-borderless">
                <thead>
                    <tr> 
                        {
                            props?.header?.map((head, idx) => <th key={`hr${idx}`}>{head.content}</th>)
                        }
                    </tr>
                </thead>
                <tbody> 
                    {
                        props?.body?.map((row, idx) => <tr key={`tr${idx}`}>
                            {
                                row?.map((col,id) => <td key={`col${id}`} style={col?.columnStyle}>{col?.content}</td>)
                            }
                        </tr>)
                    }
                </tbody>
            </table> 
        </div>
    </React.Fragment>);
};
export default TableOrganism;