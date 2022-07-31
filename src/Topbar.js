import React from "react";
import { AppBar, Typography, Toolbar, Button, Box} from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import {Link} from "react-router-dom";
import "./form.css";

export default function Topbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ position: "static" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ ml: 20 }}>
              <Typography>
                <SchoolIcon></SchoolIcon>
                <Button color="inherit">
                  <Link to="/" sx={{ color: "white" }}>
                    Dashboard
                  </Link>
                </Button>
              </Typography>
            </Box>
            <Box sx={{ mr: 20 }}>
              <PortraitIcon></PortraitIcon>
              <Button color="inherit" sx={{ mr: 12 }}>
                <Link to="/studentform" sx={{ backgroundColor: "inherit" }}>
                  Student
                </Link>
              </Button>
              <PersonIcon></PersonIcon>
              <Button color="inherit">
                <Link to="/teacherform" sx={{ color: "white" }}>
                  Teacher
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
