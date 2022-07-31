import React from "react";
import {Link} from "react-router-dom";
export default function TeacherData(props) {
  return (
    <div className="data">
      <h2>Teacher List</h2>
      <div>
        <table id="data_table">
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              {/* <th>Gender</th>
                <th>Email</th> */}
              <th>Course</th>
              <th>Language</th>
              <th>Batch</th>
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
                  {/* <td>{row.gender}</td>
                    <td>{row.email}</td> */}
                  <td>{row.course}</td>
                  <td>{row.language}</td>
                  <td>{row.batch}</td>
                  <td>
                    <Link to="/teacherform">
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
