import "./App.css";
import Search from "./components/search/search";
import { useState } from "react";
import { Container } from "@mui/material";
import MediaCard from "./components/current-weather/MainCard";
import FutureCardForecast from "./components/forecast/FutureCards";
import NoonWeather2 from "./images/NoonWeather2.png";
import EasterEgg from "./components/easter-eggs/EasterEgg";
import FooterImage from "./images/FooterImage.png";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const weatherFetch = fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=airTemperature,pressure,precipitation,humidity,cloudCover,gust&start=${Math.floor(
        Date.now() / 1000
      )}&source=noaa`,
      {
        headers: {
          Authorization:
            "7a1fd7d2-b517-11ed-bc36-0242ac130002-7a1fd840-b517-11ed-bc36-0242ac130002",
        },
      }
    );

    Promise.all([weatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        const days = [
          weatherResponse.hours[24],
          weatherResponse.hours[48],
          weatherResponse.hours[72],
          weatherResponse.hours[96],
          weatherResponse.hours[120],
          weatherResponse.hours[144],
        ];

        setCurrentWeather({
          city: searchData.label,
          ...weatherResponse.hours[0],
        });
        setForecastWeather({
          days,
        });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);

  return (
    <Container sx={{ bgcolor: "white", height: "100vh" }}>
      <img src={NoonWeather2} alt="logo" width="35%" />
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <MediaCard data={currentWeather} />}
      {currentWeather && <FutureCardForecast data={forecastWeather.days} />}
      {currentWeather && <EasterEgg data={currentWeather} />}
      <img src={FooterImage} alt="footer" width="100%" />
    </Container>
  );
}

export default App;
