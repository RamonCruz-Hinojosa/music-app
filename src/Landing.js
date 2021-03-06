import * as React from "react";
import Header from "./comps/Header";
import { CssBaseline } from "@mui/material";
import BasicCard from "./comps/Card";
import { Grid } from "@mui/material";
import BasicSwitches from "./comps/BasicSwitches";
import DiscreteSlider from "./comps/Slider";
import BasicSelect from "./comps/Select";
import { useState } from "react";

export default function Landing() {
  const [isOnline, setIsOnline] = useState(false);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState("Normal");
  const [notifications, setNotifications] = useState(["yo", "oy", "oi"]);
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
              component={BasicSwitches}
              isOnline={isOnline}
              setIsOnline={setIsOnline}
            />
          </Grid>
          <Grid item>
            <BasicCard
              title="Master Volume"
              description="Overrides all other sound settings in this application."
              component={DiscreteSlider}
              volume={volume}
              setVolume={setVolume}
            />
          </Grid>
          <Grid item>
            <BasicCard
              title="Sound Quality"
              description="Manually control the music quality in event of poor connection"
              component={BasicSelect}
              quality={quality}
              setQuality={setQuality}
            />
          </Grid>

          <Grid item xs="12">
            <h3>
              System Notifications:
              {isOnline ? (
                ""
              ) : (
                <li>
                  Your application is offline. You won't be able to share or
                  stream music to other devices.
                </li>
              )}
              {volume > 80 && (
                <li>
                  Listening to music at a high volume could cause long-term
                  hearing loss.
                </li>
              )}
              {quality === "Low" && (
                <li>
                  Music quality is degraded. Increase quality if your connection
                  allows it.
                </li>
              )}
            </h3>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
