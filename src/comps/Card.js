import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  const {
    component: Component,
    isOnline,
    setIsOnline,
    title,
    description,
  } = props;

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography
          color="text.secondary"
          variant="h5"
          component="h2"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>{Component ? <Component /> : null}</CardActions>
    </Card>
  );
}

//export { BasicCard };
//export default BasicCard;
