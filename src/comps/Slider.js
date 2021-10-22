import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={20}
        step={10}
        marks
        min={0}
        max={100}
        onChange={(e) => console.log(e.target.value)}
      />
    </Box>
  );
}
