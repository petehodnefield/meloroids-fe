import React, { useEffect, useState } from "react";
import triangleIcon from "../../../assets/icons/triangle-icon.svg";
const SelectArtist = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThereText, setIsThereText] = useState(false);

  return (
    <>
      <div className="select-wrapper ">
        <h4 className="select__textPrompt uppercase">Select an artist</h4>
        <div
          className={`select__prompt ${isThereText ? "yesText" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="select__triangle" src={triangleIcon} />
          <p className="p1 select__artistText">{props.selectedArtists}</p>
        </div>
        {isOpen ? (
          <div className="choice-wrapper">
            {" "}
            {props.artists.map((artist) => (
              <div
                className={`select__artist `}
                onClick={() => {
                  props.setSelectedArtists(artist.name);
                  setIsOpen(!isOpen);
                  setIsThereText(true);
                }}
                key={artist.name}
              >
                <p className={`select__artist-text `}>{artist.name}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default SelectArtist;
