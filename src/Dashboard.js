import React from "react";
import StudentCard from "./StudentCard";
import TeacherCard from "./TeacherCard";
import Topbar from "./Topbar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div>
        <Topbar sx={{ position: "static" }} />
        <div className="box">
          <StudentCard sx={{ position: "static" }} />
          <TeacherCard sx={{ position: "static" }}/>

        </div>
      </div>
    </>
  );
}
