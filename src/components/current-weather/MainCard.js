import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CUR_WEEK_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const CUR_MONTH = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const MediaCard = ({ data, curTemp }) => {
  const today = new Date().getDate();
  const newDayInAWeek = new Date().getDay();
  const newMonth = new Date().getMonth();
  const curDay = CUR_WEEK_DAYS.slice(
    newDayInAWeek,
    CUR_WEEK_DAYS.length
  ).concat(CUR_WEEK_DAYS.slice(0, newDayInAWeek));

  const curMon = CUR_MONTH.slice(newMonth, CUR_MONTH.length).concat(
    CUR_MONTH.slice(0, newMonth)
  );
  const tempC = Math.round(data.airTemperature.noaa) + "°C";
  const tempF = Math.round((data.airTemperature.noaa * 9) / 5 + 32) + "°F";
  let temp = "";

  if (curTemp === null) {
    temp = tempC;
  } else if (curTemp === "celsius") {
    temp = tempC;
  } else if (curTemp === "fahrenheit") {
    temp = tempF;
  }

  return (
    <Card sx={{ justifyContent: "flex-end" }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
          {curDay[6]}
        </Typography>
        <Typography
          gutterBottom
          variant="20"
          component="div"
          color="text.secondary"
          sx={{ my: 2 }}
        >
          {today} {curMon[0]}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.city}
        </Typography>
        <Typography gutterBottom variant="h2" component="div" color="#00a8f3">
          {temp}
        </Typography>
        <Typography gutterBottom variant="h9" component="div">
          Details
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Precipitation: {data.precipitation.noaa}mm/h
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Humidity: {Math.round(data.humidity.noaa)}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wind: {Math.round(data.gust.noaa)} m/s
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pressure: {Math.round(data.pressure.noaa)} hPa
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default MediaCard;
