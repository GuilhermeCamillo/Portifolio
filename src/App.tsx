import React from "react";
import "./App.css";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";

function App() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box className="BoxEstilo">
        <Typography variant="h6">Guilherme Camillo Agostinho</Typography>
        <Box display="flex">
          <Tabs
            value={value}
            onChange={handleChange}
          >
            <Tab value="one" label="Home"></Tab>
            <Tab value="two" label="Aplicativos"></Tab>
            <Tab value="three" label="Curriculo"></Tab>
            <Tab value="four" label="Sobre"></Tab>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default App;
