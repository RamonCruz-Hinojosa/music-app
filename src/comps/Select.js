import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";

export default function BasicSelect(props) {
  const handleChange = (e) => {
    props.setQuality(e.target.value);
  };

  useEffect(() => {
    console.log(props.quality);
  }, [props.quality]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.quality}
          label="select"
          onChange={handleChange}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
