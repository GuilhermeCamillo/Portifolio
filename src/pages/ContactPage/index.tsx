import React from "react";
import "./styles.css";
import { Box, Paper, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <>
      <Box className="Box">
        <Paper elevation={6} className="View">
          <Typography className="TextColor">
            Guilherme Camillo Agostinho
          </Typography>
          <Typography className="TextColor">gui.camillo@outlook.com</Typography>
          <Typography className="TextColor">(11) 96904-5746</Typography>
          <Typography className="TextColor">CONTATO</Typography>
          <Typography className="TextColor">CONTATO</Typography>
          <Typography className="TextColor">CONTATO</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default ContactPage;
