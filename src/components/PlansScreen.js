import React from "react";
import "../styles/PlansScreen.css";

function PlansScreen({ title, quality }) {
  return (
    <div className="plansScreen">
      <div className="plansScreen-plan">
        <div className="plansScreen-info">
          <h5>{title}</h5>
          <h6>{quality}</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
