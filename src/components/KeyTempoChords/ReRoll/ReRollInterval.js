import React from "react";
import diceIcon from "../../../assets/icons/dice-icon.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ReRollInterval = () => {
  const { artists: artist } = useParams();
  return (
    <Link className="reroll-wrapper" to={`/train/artists/${artist}/Interval`}>
      <button className="btn-reroll">
        <img className="dice-icon" src={diceIcon} />
      </button>
    </Link>
  );
};
export default ReRollInterval;
