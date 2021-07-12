import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 4 && month < 9) {
    return lat > 0 ? "summer " : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const icon = season === "winter" ? "snowflake" : "sun";
  const text =
    season === "winter"
      ? "Burr, it is winter"
      : "Its summer, Lets hit the beach";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};
export default SeasonDisplay;
