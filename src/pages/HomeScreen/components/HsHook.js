import React from "react";
import { Link } from "react-router-dom";

const HsHook = () => {
  return (
    <div className="hs-hook-wrapper">
      <h2 className="hs__header">
        Become a <span className="bold">literate</span> producer
      </h2>
      <h4 className="hs__sub-header">Gain an unfair advantage</h4>
      <div className="hs-text-wrapper">
        <p className="p3 hs__text">
          Meloroids has the best data on what artists use in their songs.
          Meloroids will help you start landing placements.
        </p>
        <Link to="/train">
          <button className=" btn btn-tertiary btn-cta">Learn more</button>
        </Link>
      </div>
    </div>
  );
};

export default HsHook;
