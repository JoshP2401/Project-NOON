import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CryMatt from "./cry-matt-mercer.gif";
import travelChris from "./ChrisSS.png";

const EasterEgg = ({ data }) => {
  if (data.city.includes("Switzerland") === true) {
    return (
      <Card>
        <CardContent>
          <Typography>
            Pssst! While in Switzerland, why not consider grabbing a coffee with
            either Thorsten or Florian!🍵
          </Typography>
        </CardContent>
      </Card>
    );
  }

  if (data.city.includes("Heritage Park") === true) {
    return (
      <Card>
        <CardContent>
          <Typography>
            Is it the same? Not really. But who knows, you may run into Michael
            or Christy here! 👩‍💻🧑‍💻
          </Typography>
        </CardContent>
      </Card>
    );
  }

  if (data.city.includes("Alphaville") === true) {
    return (
      <Card>
        <center>
          <CardContent>
            <Typography>
              <img src={CryMatt} alt="Matt crying" width="40%" />
            </Typography>
          </CardContent>
        </center>
      </Card>
    );
  }

  if (data.city.includes("San Sebastián") === true) {
    return (
      <Card>
        <center>
          <CardContent>
            <Typography>
              <img src={travelChris} alt="Chris travel" width="50%%" />
            </Typography>
          </CardContent>
        </center>
      </Card>
    );
  }
};

export default EasterEgg;
