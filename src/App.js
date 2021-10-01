import * as React from "react";
import Header from "./comps/Header";
import SignIn from "./comps/singIn";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <SignIn />
    </>
  );
}

export default App;
