import React, { useState } from "react";
import CollapsibleTableOrganism from "../../../organisms/table/CollapsibleTable.organism";
import "./ClientLinksTable.scss";
import ButtonAtom from "../../../atoms/ButtonAtom";
import TableBodyComponent from "./TableBodyComponent";

const ClientLinksTable = () => {

  const [tableState, setTableState] = useState({
    header: [{content: <p style={{width: "160px"}}>Action</p>, columnStyle : {width : "160px"}}, {content:"Generated ID", columnStyle : {}}, {content:"Client Name", columnStyle : {}}, {content:"Company", columnStyle : {}} ],
    body: [{
            id: "1",
            row: [
              {
              content : <ButtonAtom onClick={() => collapseOnOpen("1")} className="button btn-pink is-rounded">Collapse</ButtonAtom>,
              columnStyle : {
                width : "160px"
              }
              }, 
              {
                content : "1234 ID",
                columnStyle : {}
              }, 
              {
                content : "Facebook Corporation",
                columnStyle : {}
              }, 
              {
                content : "Meta Corporation",
                columnStyle : {}
              }
            ],
            isContentShow: false,
            content: (<div className='collapsible-content'>
                <TableBodyComponent />
            </div>)
          },
          {
            id: "2",
            row: [
              {
              content : <ButtonAtom onClick={() => collapseOnOpen("2")} className="button btn-pink is-rounded">Collapse</ButtonAtom>,
              columnStyle : {
                width : "160px"
              }
              }, 
              {
                content : "1234 ID",
                columnStyle : {}
              }, 
              {
                content : "Facebook Corporation",
                columnStyle : {}
              }, 
              {
                content : "Meta Corporation",
                columnStyle : {}
              }
            ],
            isContentShow: false,
            content: (<div className='collapsible-content'>
                <TableBodyComponent />
            </div>)
          },
          {
            id: "3",
            row: [
              {
              content : <ButtonAtom onClick={() => collapseOnOpen("3")} className="button btn-pink is-rounded">Collapse</ButtonAtom>,
              columnStyle : {
                width : "160px"
              }
              }, 
              {
                content : "1234 ID",
                columnStyle : {}
              }, 
              {
                content : "Facebook Corporation",
                columnStyle : {}
              }, 
              {
                content : "Meta Corporation",
                columnStyle : {}
              }
            ],
            isContentShow: false,
            content: (<div className='collapsible-content'>
                <TableBodyComponent />
            </div>)
          }]
  });

  const collapseOnOpen = (id) => {
    let idx = tableState.body.findIndex(x => x.id === id); 
    let tbData = tableState.body; 
    tbData[idx].isContentShow = !tbData[idx].isContentShow;  
    setTableState({...tableState, body : tbData}); 
  }


  return (
    <React.Fragment>
        <div className="ClientLinksTable">
          <CollapsibleTableOrganism {...tableState}/>
        </div>
    </React.Fragment>
  );
};

export default ClientLinksTable;
