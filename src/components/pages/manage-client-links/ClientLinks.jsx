import React, { useEffect, useState } from 'react';
import "./ClientLinks.scss"; 
import ClientLinksTable from "./components/ClientLinksTable";
import ClientLinksNewSetup from "./components/ClientLinksNewSetup"; 
import ButtonAtom from '../../atoms/ButtonAtom';
import HeaderAtom from '../../atoms/HeaderAtom';
import ContainerAtom from "../../atoms/ContainerAtom";

const clientLinks = () => {

  const [newSetupStatus, setNewSetupStatus] = useState(false);

  const newSetupOnClick = (status) => {
    setNewSetupStatus(status);
  }

  return (
    <React.Fragment>
      <div className="ClientLinks">
        <div class="forTitle"> 
          <HeaderAtom className="title is-4">Manage Client Links</HeaderAtom>
          <ButtonAtom className="button btn-pink btnNewSetup is-rounded" onClick={() => newSetupOnClick(true)}>New Setup</ButtonAtom>
        </div>
        {newSetupStatus && <ContainerAtom content={<ClientLinksNewSetup onCancel={newSetupOnClick}/>} />}
        <br />
        <ContainerAtom content={<ClientLinksTable />} />
      </div>
    </React.Fragment>
  );
};

export default clientLinks;
