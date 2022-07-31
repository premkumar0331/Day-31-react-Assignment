import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

export default function StudentData(props) {
  return (
    <div className="data">
      <h2>StudentList</h2>
      <div>
        <table id="data_table">
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Course</th>
              <th>Language</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.user.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.firstname}</td>
                  <td>{row.lastname}</td>
                  <td>{row.gender}</td>
                  <td>{row.email}</td>
                  <td>{row.course}</td>
                  <td>{row.language}</td>
                  <td>
                    <Link to="/studentform">
                      <button
                        onClick={() => {
                          props.onPopulatedData(row.id);
                        }}
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        props.handleDelete(row.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
