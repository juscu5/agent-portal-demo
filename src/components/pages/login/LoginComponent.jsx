import React from "react";
import "./LoginComponent.scss";

import designWings from "../../../assets/login/design-wings.png";
import globeAsset from "../../../assets/login/globe.png";
import teleperformanceAsset from "../../../assets/teleperformance.png";
import phoneAsset from "../../../assets/login/phonevisual.png";
import laptopAsset from "../../../assets/login/laptopvisual.png";
import coffeeAsset from "../../../assets/login/coffeevisual.png";
import agentPortalAsset from "../../../assets/login/welcome-to-agent-portal.png";
import InputAtom from "../../atoms/InputAtom";
import ButtonAtom from "../../atoms/ButtonAtom";
import HeaderAtom from "../../atoms/HeaderAtom";
import LabelAtom from "../../atoms/LabelAtom";
import InputGroupMolecule from "../../molecules/InputGroup.molecule";

const Login = (props) => {
  return (
    <React.Fragment>
      <div className="LoginComponent">
        <div className="bg-wings">
          <img src={designWings} className="wings-1" alt="" />
          <img src={designWings} className="wings-2" alt="" />
        </div>
        <div className="loginContainer">
          <div className="login-body-content">
            <div className="globe-icon-content">
              <img src={globeAsset} className="globe-bg" alt="" />
            </div>
            <div className="side-design">
              <div className="clip-art-wrapper">
                <img src={designWings} className="body-wing" alt="" />
                <img src={teleperformanceAsset} className="tp-logo" alt="" />
                <div className="img-clip-art">
                  <div className="img-content">
                    <img src={phoneAsset} className="clip-art-phone" alt="" />
                    <img src={laptopAsset} className="clip-art-laptop" alt="" />
                    <img src={coffeeAsset} className="clip-art-coffee" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="side-login">
              <div className="login-body">
                <div className="logo">
                  <img src={agentPortalAsset} alt="" />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
                <InputGroupMolecule
                  {...{
                    label: {
                      title: "Username",
                      htmlFor: "",
                      style: {paddingLeft: "18px"},
                    },
                    input: {
                      type: "text",
                      className: "input is-rounded",
                      placeholder: "Username",
                    },
                  }}
                />
                <InputGroupMolecule
                  {...{
                    label: {
                      title: "Password",
                      htmlFor: "",
                      style: {paddingLeft: "18px"},
                    },
                    input: {
                      type: "password",
                      className: "input is-rounded",
                      placeholder: "Password",
                    },
                  }}
                />
                <ButtonAtom className="button btn-pink is-rounded">Login</ButtonAtom>
                <hr />
                <ButtonAtom className="button btn-purple-outline is-rounded">
                  Microsoft Account
                </ButtonAtom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
