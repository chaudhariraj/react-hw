import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (localStorage.getItem("token")) {
      await localStorage.removeItem("token")
    }
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src="public\images\incubxperts_logo.jpg" width={50} alt="logo" />
          </Link>
        </Typography>
        <TextField
          id="outlined-basic"
          variant="filled"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: "white", marginRight: "5px" }} />
            ),
          }}
        />
        <IconButton
          edge="end"
          aria-label="logout"
          aria-haspopup="true"
          onClick={handleLogout}
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

