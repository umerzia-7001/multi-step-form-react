import React from "react";
import { useFormData } from "../../../context";

const ResultDisplay: React.FC<any> = () => {
  const { data } = useFormData();
  const { make, colour, code } = data;

  return (
    <div className="car-details">
      <pre>{JSON.stringify(data)}</pre>
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

export default ResultDisplay;
