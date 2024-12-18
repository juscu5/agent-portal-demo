import React from "react";
import "./OverviewCard.scss";

const OverviewCard = () => {
  return (
    <div className="forLinksOverview">
      <div class="card forCardsOverview">
        <div class="card-image">
          <figure class="image">
            <img
              class="imageClass"
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">My TP App</p>
            </div>
          </div>

          <div class="content forContentHeight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets
          </div>

          <br />

          <div class="btnSector">
            <button class="button is-danger btnOverview">View Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
