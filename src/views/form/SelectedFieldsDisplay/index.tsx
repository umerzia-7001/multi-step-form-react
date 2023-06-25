import React from "react";

import { ISelectedFieldsDisplay } from "../../../types/modules/form";

const SelectedFieldsDisplay: React.FC<ISelectedFieldsDisplay> = ({
  carDetails,
}) => {
  const { make, colour, code } = carDetails;

  return (
    <div className="car-details">
      <p>
        I have a <span className="car-details__make">{make}</span> and the
        colour is <span className="car-details__colour">{colour}</span>.
      </p>
      {colour?.toLowerCase() === "red" && (
        <p className="car-details__red-text">THE CAR IS RED! NICE!!</p>
      )}
      <p className="car-details__code">REF: {code}</p>
    </div>
  );
};

export default SelectedFieldsDisplay;
