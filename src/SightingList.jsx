import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SightingList = () => {
  const BACKEND_URL = "http://localhost:3000";
  const [sightings, setSightings] = useState();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sightings`).then((response) => {
      setSightings(response.data);
    });
  }, []);

  if (!sightings) return null;
  return (
    <div className="App">
      <header className="App-header">
        {sightings.map((sighting, index) => (
          <Link to={`/sightings/${index}`}>
            <button key={index}>
              <p>
                {sightings[index].YEAR} {sightings[index].MONTH}{" "}
                {sightings[index].STATE}
              </p>
            </button>
          </Link>
        ))}
      </header>
    </div>
  );
};
