import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import App from "./App";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "./constants";

export const Sighting = () => {
  const [sighting, setSighting] = useState();
  const [sightingIndex, setSightingIndex] = useState();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sightings/${sightingIndex}`).then((response) => {
      setSighting(response.data);
    });
  }, [sightingIndex]);

  const params = useParams();
  if (sightingIndex !== params.sightingIndex) {
    setSightingIndex(params.sightingIndex);
  }

  if (!sighting) return null;
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{sighting.YEAR}</p>
          <p>{sighting.MONTH}</p>
          <p>{sighting.STATE}</p>
          <p>{sighting.OBSERVED}</p>
        </div>
      </header>
    </div>
  );
};
