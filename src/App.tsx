import React, { useState } from "react";
import "./App.css";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import HomePage from "./pages/HomePage";
import AppsPage from "./pages/AppsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderComponents = () => {
    switch (value) {
      case 1:
        return <HomePage />;
      case 2:
        return <AppsPage />;
      case 3:
        return <ResumePage />;
      case 4:
        return <ContactPage />;
    }
  };

  return (
    <div className="ColorBack">
      <Box className="BoxEstilo">
        <Typography color="white">
          Olá, meu nome é{" "}
          <Typography
            variant="h6"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Guilherme Camillo Agostinho
          </Typography>
        </Typography>
        <Box display="flex">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
          >
            <Tab
              value={1}
              label="Início"
            />
            <Tab
              value={2}
              label="Aplicativos"
            />
            <Tab
              value={3}
              label="Currículo"
            />
            <Tab
              value={4}
              label="Contato"
            />
          </Tabs>
        </Box>
      </Box>
      <Divider style={{ color: "black", backgroundColor: "black" }} />
      {renderComponents()}
    </div>
  );
}

export default App;
