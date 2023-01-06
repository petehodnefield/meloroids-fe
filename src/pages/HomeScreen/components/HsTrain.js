import React from "react";
import { Icon } from "@iconify/react";

import hsTrainImg from "../../../assets/images/hs-train.png";
import { Link } from "react-router-dom";
const HsTrain = ({ navSelected, setNavSelected }) => {
  return (
    <div id="train" className="hs-train-container">
      <div className="hs-train-text-img-wrapper">
        <div className="hs-train-text-wrapper">
          <div className="hs-train-header-wrapper">
            <h2 className="hs__train-header bold">
              TRAIN <span className="hs__train-sub-header">by Meloroids</span>
            </h2>
          </div>
          <p className="p3 hs__text hs__train-text">
            Lorem ipsum dolor sit amet consectetur. Euismod mattis proin rutrum
            vulputate mi. Enim nullam ipsum donec sed ornare vitae diam ut et.
            Tempus quis interdum quis scelerisque leo condimentum sed nulla.
          </p>
          <Link to="/train">
            <button
              onClick={() => setNavSelected("Train")}
              className="btn p-gradient btn-cta"
            >
              Get Started
            </button>
          </Link>
        </div>
        <div className="hs__train-img-wrapper">
          <img className="hs__train-img" src={hsTrainImg} />
        </div>
      </div>
      <div className="hs-train-card-wrapper">
        <div className="hs__train-card p-gradient">
          <div className="train-card-text-wrapper">
            <Icon
              className="hs__card-icon"
              icon="fluent-emoji-high-contrast:thinking-face"
            />
            <h3 className="bold hs__card-header">Analysis Paralysis</h3>
            <p className="p2 hs__card-text">
              Meloroids pulls the key, tempo, and chord progression from an
              actual song by the selected artist. Elimates the analysis
              paralysis that comes with loop making.
            </p>
          </div>
        </div>
        <div className="hs__train-card p-gradient">
          <div className="train-card-text-wrapper">
            <Icon className="hs__card-icon" icon="mdi:midi-port" />
            <h3 className="bold hs__card-header">1000+ MIDI</h3>
            <p className="p2 hs__card-text">
              Meloroids instantly provides you a MIDI file of the selected chord
              progression to give initial inspiration. This takes out the guess
              work of deciding what chord progression you should use.{" "}
            </p>
          </div>
        </div>
        <div className="hs__train-card p-gradient">
          <div className="train-card-text-wrapper">
            <Icon className="hs__card-icon" icon="ic:baseline-mic" />
            <h3 className="bold hs__card-header">20+ Artists</h3>
            <p className="p2 hs__card-text">
              Meloroids focuses on rappers with small-mid size followings.
              Targeting these artists increase your odds of a placement. New
              artists get added every week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HsTrain;
