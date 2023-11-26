import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import HomeIcon from "@mui/icons-material/Home";
const pages = ["About", "Events", "Pricing", "Jobs+"];

export default function Appbar() {
  const { user, dispatch } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "MediumOrchid",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 35,
              color: "DeepSkyBlue",
            }}
          >
            EventsHub!
          </Typography>
          <Link to="/home">
            <HomeIcon style={{ color: "white" }}> </HomeIcon>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              style={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {user === null ? (
            <Button
              variant="outlined"
              style={{
                backgroundColor: "GhostWhite",
                borderColor: "GhostWhite",
              }}
            >
              <nav>
                <CustomLink
                  to="/login"
                  style={{ textDecoration: "none", color: "LightSeaGreen" }}
                >
                  LOGIN
                </CustomLink>
              </nav>
            </Button>
          ) : (
            <>
              <Typography>{user.name}</Typography>
              <Button
                style={{ color: "black" }}
                color="inherit"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Logout
              </Button>
            </>
          )}
          <Button
            style={{
              backgroundColor: "LightSeaGreen",
            }}
          >
            <nav>
              <CustomLink
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                SIGN UP
              </CustomLink>
            </nav>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
function CustomLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
//export default ;
