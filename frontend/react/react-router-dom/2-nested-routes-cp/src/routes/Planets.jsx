import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import planetsThumbnail from "../assets/planets.jpeg";
import BackButton from "../components/BackButton";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();

  const loadPlanets = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://swapi.dev/api/planets", {
        signal: controller.signal,
      });
      // TODO: answer here
      setPlanets(data.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getID = (url) => {
    const parsed = url?.split("/");
    return parsed[parsed.length - 2];
  };

  useEffect(() => {
    loadPlanets();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="page">
      <header>
        <BackButton />
        <img
          src={planetsThumbnail}
          width={40}
          height={40}
          alt="Planets Thumbnail"
        />
        <h1>Planets</h1>
      </header>

      {!loading ? (
        <div className="grid">
          {planets.length &&
            planets.map((planet, index) => (
              // TODO: answer here
              <Link key={index} to={`/planets/${getID(planet.url)}`}>
                <div className="card">
                  <h2>{planet.name}</h2>
                  <p>{planet.population}</p>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Planets;
