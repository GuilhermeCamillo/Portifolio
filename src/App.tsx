import React, { useState } from "react";
import "./App.css";
import { Box, Tab, Tabs, Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderComponents = () => {
    switch (value) {
      case 1:
        return <Typography>UM</Typography>
      case 2:
        return <Typography>DOIS</Typography>
      case 3:
        return <Typography>TRÊS</Typography>
      case 4:
        return <Typography>QUATRO</Typography>
    }
  }

  return (
    <>
      <Box className="BoxEstilo">
        <Typography variant="h6">Guilherme Camillo Agostinho</Typography>
        <Box display="flex">
          <Tabs
            value={value}
            onChange={handleChange}
          >
            <Tab value={1} label="Home"></Tab>
            <Tab value={2} label="Aplicativos"></Tab>
            <Tab value={3} label="Curriculo"></Tab>
            <Tab value={4} label="Sobre"></Tab>
          </Tabs>
        </Box>
      </Box>
      {renderComponents()}
    </>
  );
}

export default App;
