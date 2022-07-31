import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import TeacherForm from "./TeacherForm";
import "./form.css"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/studentform" element={<StudentForm />}></Route>
          <Route path="/teacherform" element={<TeacherForm />}></Route>
          <Route path="/studentlist" element={<StudentList />}></Route>
          <Route path="/teacherlist" element={<TeacherList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
