import React from 'react'; 
import './CollapsibleTableOrganism.scss'; 

const defaultData = {
    header: [],
    body: [{
        id: "",
        row: [],
        content: {},
        isContentShow: false
    }]
};

const CollapsibleTableOrganism = (props = defaultData) => {
    return (<React.Fragment>
        <div className='CollapsibleTableOrganism'>
            <table className='table is-fullwidth is-borderless stripped'> 
            </table>
            <ul>
               <li className='t-header'>
                    <div className='row'> 
                        {
                            props?.header?.map((head) => <div className='tbl-col'  style={head?.columnStyle}>{head.content}</div>)
                        }
                    </div>
                </li> 
                {
                    props?.body?.map((bodyRow, idx) => <li className={`t-body${idx%2? '' : " odd"}`}>
                        <div className='row'> 
                            {
                                bodyRow?.row?.map((col) => <div className='tbl-col' style={col?.columnStyle}>{col.content}</div>)
                            }
                        </div>
                        {bodyRow.isContentShow && <div className='collapsible-content'>
                            {
                                bodyRow?.content
                            }
                        </div>}
                    </li>)
                } 
            </ul>
        </div>
    </React.Fragment>);
};

export default CollapsibleTableOrganism;