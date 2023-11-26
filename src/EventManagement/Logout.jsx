import React from "react";
import { Typography, Container } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
const Logout = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container sx={{ mt: "12px" }}>
      <Typography variant="h3">
        {user === null ? "Oops! You are not logged in." : "Welcome! " + user}
      </Typography>
    </Container>
  );
};
export default Logout;
