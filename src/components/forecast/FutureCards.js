import * as React from "react";
import "./FutureCards.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WEEK_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const FutureCardForecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ bgcolor: "#00a8f3", ":hover": { bgcolor: "#5ec4ff" } }}
        >
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            <strong>{forecastDays[1]}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
            {Math.round(data[0].airTemperature.noaa)}°C
          </Typography>
          <Typography> Details: </Typography>
          <Typography className="info">
            Precipitation: {data[0].precipitation.noaa}mm/h
          </Typography>
          <Typography className="info">
            {" "}
            Wind: {Math.round(data[0].gust.noaa)} m/s{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Humidity: {Math.round(data[0].humidity.noaa)}%
          </Typography>
          <Typography className="info">
            {" "}
            Pressure: {Math.round(data[0].pressure.noaa)} hPa{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ bgcolor: "#00a8f3", ":hover": { bgcolor: "#5ec4ff" } }}
        >
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            <strong>{forecastDays[2]}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
            {Math.round(data[1].airTemperature.noaa)}°C
          </Typography>
          <Typography> Details</Typography>
          <Typography className="info">
            Precipitation: {data[1].precipitation.noaa}mm/h
          </Typography>
          <Typography className="info">
            {" "}
            Wind: {Math.round(data[1].gust.noaa)} m/s{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Humidity: {Math.round(data[1].humidity.noaa)}%{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Pressure: {Math.round(data[1].pressure.noaa)} hPa{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{ bgcolor: "#00a8f3", ":hover": { bgcolor: "#5ec4ff" } }}
        >
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            <strong>{forecastDays[3]}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
            {Math.round(data[2].airTemperature.noaa)}°C
          </Typography>
          <Typography> Details</Typography>
          <Typography className="info">
            {" "}
            Precipitation: {data[2].precipitation.noaa}mm/h{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Wind: {Math.round(data[2].gust.noaa)} m/s{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Humidity: {Math.round(data[2].humidity.noaa)}%{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Pressure: {Math.round(data[2].pressure.noaa)} hPa{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ bgcolor: "#00a8f3", ":hover": { bgcolor: "#5ec4ff" } }}
        >
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            <strong>{forecastDays[4]}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
            {Math.round(data[3].airTemperature.noaa)}°C
          </Typography>
          <Typography> Details</Typography>
          <Typography className="info">
            {" "}
            Precipitation: {data[3].precipitation.noaa}mm/h{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Wind: {Math.round(data[3].gust.noaa)} m/s{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Humidity: {Math.round(data[3].humidity.noaa)}%{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Pressure: {Math.round(data[3].pressure.noaa)} hPa{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ bgcolor: "#00a8f3", ":hover": { bgcolor: "#5ec4ff" } }}
        >
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            <strong>{forecastDays[5]}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
            {Math.round(data[4].airTemperature.noaa)}°C
          </Typography>
          <Typography> Details</Typography>
          <Typography className="info">
            {" "}
            Precipitation: {data[4].precipitation.noaa}mm/h{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Wind: {Math.round(data[4].gust.noaa)} m/s{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Humidity: {Math.round(data[4].humidity.noaa)}%{" "}
          </Typography>
          <Typography className="info">
            <a
              href="https://www.youtube.com/watch?v=a01QQZyl-_I"
              target="_blank"
            >
              Pressure: {Math.round(data[4].pressure.noaa)} hPa
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ bgcolor: "#00a8f3", ":hover": { bgcolor: "#5ec4ff" } }}
        >
          <Typography sx={{ color: "white", fontSize: "1rem" }}>
            <strong>{forecastDays[6]}</strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
            {Math.round(data[5].airTemperature.noaa)}°C
          </Typography>
          <Typography> Details</Typography>
          <Typography className="info">
            {" "}
            Precipitation: {data[5].precipitation.noaa}mm/h{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Wind: {Math.round(data[5].gust.noaa)} m/s{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Humidity: {Math.round(data[5].humidity.noaa)}%{" "}
          </Typography>
          <Typography className="info">
            {" "}
            Pressure: {Math.round(data[5].pressure.noaa)} hPa{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FutureCardForecast;
