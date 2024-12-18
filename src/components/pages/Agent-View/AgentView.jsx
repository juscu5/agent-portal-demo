import React from "react";
import "./AgentView.scss";
import OverviewCard from "../../organisms/header/OverviewCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import tp1 from "../../assets/tppicture1.png";
import tp2 from "../../assets/tppicture2.jpg";
import tp4 from "../../assets/tppicture4.jpg";

const AgentView = () => {
  return (
    <React.Fragment>
      <div className="agentView">
        <div className="carouselDiv">
          <Carousel
            useKeyboardArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            showArrows={false}
            showThumbs={false}
          >
            <div>
              <img src={tp1} />
            </div>
            <div>
              <img src={tp2} />
            </div>
            <div>
              <img src={tp4} />
            </div>
          </Carousel>
        </div>

        <br />
        <br />
        
        <div className="border">
        </div>

        <br/>

        <div className="column">
          <h1 className="title">
              <p className="titleName">Overview</p>
          </h1>
        </div>

        <div className="columns is-multiline is-centered">
          <div className="column is-narrow">
            <OverviewCard />
          </div>
          <div className="column is-narrow">
            <OverviewCard />
          </div>
          <div className="column is-narrow">
            <OverviewCard />
          </div>
          <div className="column is-narrow">
            <OverviewCard />
          </div>
          <div className="column is-narrow">
            <OverviewCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AgentView;
