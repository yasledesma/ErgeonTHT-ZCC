import React from "react";
import ZipCodeInput from "./components/ZipCodeInput";
import { Grid, Typography } from "@mui/material";

const App = () => {
  return (
    <Grid
      className="App"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      display="flex"
      gap="2rem"
      style={{ minHeight: "100vh", background: "#e2fde8" }}
    >
      <Typography variant="h1" style={{ color: "#00b900", fontSize: "2.5rem" }}>
        ZIP Code Component
      </Typography>
      <ZipCodeInput
        label="ZIP Code"
        errorText="Invalid ZIP code"
        helperText="ZIP code doesn't exist"
      />
    </Grid>
  );
};

export default App;
