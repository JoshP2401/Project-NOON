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

const MediaCard = ({ data }) => {
  const newDayInAWeek = new Date().getDay();
  const curDay = CUR_WEEK_DAYS.slice(
    newDayInAWeek,
    CUR_WEEK_DAYS.length
  ).concat(CUR_WEEK_DAYS.slice(0, newDayInAWeek));
  const temp = Math.round(data.airTemperature.noaa);

  return (
    <Card sx={{ justifyContent: "flex-end" }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="#00a8f3">
          {curDay[6]}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.city}
        </Typography>
        <Typography gutterBottom variant="h2" component="div" color="#00a8f3">
          {temp}°C
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
