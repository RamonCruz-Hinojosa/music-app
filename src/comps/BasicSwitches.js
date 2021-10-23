import * as React from "react";
import Switch from "@mui/material/Switch";
import { useEffect } from 'react';

export default function BasicSwitches(props) {
  const handleChange = () => {
    props.setIsOnline(!props.isOnline);
  };

  useEffect(() => {
    console.log(props.isOnline)
  }, [props.isOnline])

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
