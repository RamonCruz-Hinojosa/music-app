import * as React from "react";
import Header from "./comps/Header";
import { CssBaseline } from "@mui/material";
import BasicCard from "./comps/Card";
import { Grid } from "@mui/material";
import BasicSwitches from "./comps/Switch";
import DiscreteSlider from "./comps/Slider";
import BasicSelect from "./comps/Select";
import { useState } from "react";

export default function Landing() {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <div>
      <CssBaseline />
      <Header />
      <div>
        <Grid
          container
          spacing={12}
          justifyContent="center"
          flexDirection="row"
        >
          <Grid item xs="12">
            <h3>WELCOME USER!</h3>
          </Grid>
          <Grid item>
            <BasicCard
              title="Is Online"
              description="Is this application connected to the internet?"
              isOnline={isOnline}
              setIsOnline={setIsOnline}
              component={BasicSwitches}
            />
          </Grid>
          <Grid item>
            <BasicCard
              title="Master Volume"
              description="Overrides all other sound settings in this application."
            />
          </Grid>
          <Grid item>
            <BasicCard
              title="Sound Quality"
              description="Manually control the music quality in event of poor connection"
            />
          </Grid>

          <Grid item xs="12">
            <h3>System Notifications:</h3>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
