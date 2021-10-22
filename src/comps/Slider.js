import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider(props) {
  const handleChange = (e) => {
    props.setVolume(e.target.value);
    console.log(props.volume);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={20}
        step={10}
        marks
        min={0}
        max={100}
        onChange={handleChange}
      />
    </Box>
  );
}
