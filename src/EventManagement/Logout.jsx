import { Container, Typography } from "@mui/material";
import React from "react";

const Logout = () => {
  return (
    <Container style={{ mt: "12px", marginBottom: "30%" }}>
      <Typography
        variant="h3"
        style={{
          marginLeft: "20%",
          color: "red",
          fontFamily: "Lucida Console",
        }}
      >
        Oops! You are not logged in.
      </Typography>
    </Container>
  );
};
export default Logout;
