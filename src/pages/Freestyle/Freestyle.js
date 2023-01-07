import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ARTISTS, SINGLE_ARTIST, SINGLE_SONG } from "../../utils/queries";
import TrainInfo from "./components/TrainInfo";
import "../../assets/Train.css";
function FreeStyle({ photo, setIsOpen }) {
  // grab artist&&mode from parameters
  const { artists: artist, mode } = useParams();

  // use query to pull artist
  const { loading, error, data } = useQuery(SINGLE_ARTIST, {
    variables: { name: artist },
  });

  if (loading) {
    return (
      <div className="loading-container">
        <h1>loading</h1>
      </div>
    );
  } else {
    return <TrainInfo setIsOpen={setIsOpen} artist_name={artist}></TrainInfo>;
  }
}
export default FreeStyle;
