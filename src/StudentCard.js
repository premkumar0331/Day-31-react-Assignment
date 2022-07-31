import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";
import PortraitIcon from "@mui/icons-material/Portrait";
import "./StudentCard.css";

export default function StudentCard() {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 500,
          height: "19rem",
          margin: "2.5rem",
          justifyContent: "center",
          backgroundColor: "inherit",
        }}
      >
        <CardContent sx={{ justifyContent: "center", margin: "50px" }}>
          <Typography variant="h3"  align="center">
            <PortraitIcon
              sx={{ fontSize: 64, paddingRight: 0.5, width: 80 }}
            ></PortraitIcon>
            <span className="heading">Student</span>
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Box>
            <Link to="/studentform">
              <span className="btn_link">Student Form</span>
            </Link>
          </Box>
          <Box>
            <Link to="/studentlist">
              <span className="btn_link">Student List</span>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}
