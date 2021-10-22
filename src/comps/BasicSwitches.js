import * as React from "react";
import Switch from "@mui/material/Switch";

export default function BasicSwitches(props) {
  const handleChange = () => {
    props.setIsOnline(!props.isOnline);
  };
  return (
    <div>
      <Switch
        checked={props.isOnline}
        onChange={handleChange}
        name="checkedLeft"
      />
    </div>
  );
}
