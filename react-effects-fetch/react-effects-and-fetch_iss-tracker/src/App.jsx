import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./App.css";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  //Task 1
  async function getISSCoords() {
    console.log("running function");
    try {
      // Fetch from the given url saved in the constant URL
      const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      const data = await response.json();
      // Daten anschauen um keys zu bekommen
      console.log(data);
      // After fetching successfully update the coords state accordingly.
      setCoords({
        longitude: data.longitude,
        latitude: data.latitude,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // Automatically call getISSCoords when the component mounts
  useEffect(() => {
    getISSCoords();
    const intervalId = setInterval(getISSCoords, 5000);

    // Um das Intervall zu stoppen
    clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
