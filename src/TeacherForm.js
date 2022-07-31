import React, { Component } from "react";
import axios from "axios";
import Topbar from "./Topbar";
import "./form.css";

export default class TeacherForm extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      id: "",
      firstname: "",
      lastname: "",
      //   gender: "",
      //   email: "",
      course: "",
      language: "",
      batch: "",
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://62cf0d49826a88972d08517c.mockapi.io/teacher"
    );
    // console.log(response.data);
    this.setState({ user: response.data });
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.id) {
      //update
      const response = await axios.put(
        `https://62cf0d49826a88972d08517c.mockapi.io/teacher/${this.state.id}`,
        {
          id: this.state.id,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          //   gender: this.state.gender,
          //   email: this.state.email,
          course: this.state.course,
          language: this.state.language,
          batch: this.state.batch,
        }
      );

      //console.log(response.data);

      let user = [...this.state.user];
      let index = user.findIndex((row) => row.id === response.data.id);
      //   console.log(user[index]);
      user[index] = response.data;
      this.setState({
        user: user,
        id: "",
        firstname: "",
        lastname: "",
        // gender: "",
        // email: "",
        course: "",
        language: "",
        batch: "",
      });
    } else {
      //create

      const response = await axios.post(
        "https://62cf0d49826a88972d08517c.mockapi.io/teacher",
        {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          //   gender: this.state.gender,
          //   email: this.state.email,
          course: this.state.course,
          language: this.state.language,
          batch: this.state.batch,
        }
      );
      //console.log(response.data);
      let user = [...this.state.user];
      user.push(response.data);
      this.setState({
        user: user,
        id: "",
        firstname: "",
        lastname: "",
        // gender: "",
        // email: "",
        course: "",
        language: "",
        batch: "",
      });
    }
  };

  handleDelete = async (id) => {
    const response = await axios.delete(
      `https://62cf0d49826a88972d08517c.mockapi.io/teacher/${id}`
    );
    //console.log(response.data);
    let user = this.state.user.filter((row) => row.id !== response.data.id);
    this.setState({ user: user });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onPopulatedData = (id) => {
    const selectedData = this.state.user.filter((row) => row.id === id)[0];
    // console.log(selectedData);
    this.setState({
      id: selectedData.id,
      firstname: selectedData.firstname,
      lastname: selectedData.lastname,
      //   gender: selectedData.gender,
      //   email: selectedData.email,
      course: selectedData.course,
      language: selectedData.language,
      batch: selectedData.batch,
    });
  };

  render() {
    return (
      <div>
        <Topbar sx={{ position: "static" }} />
        <div className="form">
          <div className="heading_box">
            <h2 className="heading">Teacher Form</h2>
          </div>
          <div className="content_box">
            <form
              onSubmit={(e) => {
                this.handleSubmit(e);
              }}
            >
              <label htmlFor="firstname">FirstName : </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={this.state.firstname}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              ></input>
              <br />
              <br />
              <label htmlFor="lastname">LastName : </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={this.state.lastname}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              ></input>
              <br />
              <br />
              {/* <label htmlFor="gender">Gender : </label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              onChange={(e) => {
                this.handleChange(e);
              }}
            ></input>
            <label htmlFor="gender">Male</label> &nbsp;
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => {
                this.handleChange(e);
              }}
            ></input>
            <label htmlFor="female">FeMale</label>
            <br />
            <br />
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            ></input>
            <br />
            <br /> */}
              <label htmlFor="course">Course : </label>
              <select
                name="course"
                id="course"
                value={this.state.course}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                <option value="">--Select--</option>
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
              </select>
              <br />
              <br />
              <label htmlFor="language">Language : </label>
              <select
                name="language"
                id="language"
                value={this.state.language}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                <option value="">--Select--</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                <option value="Tamil">Tamil</option>
              </select>
              <br />
              <br />
              <label htmlFor="batch">Batch : </label>
              <select
                name="batch"
                id="batch"
                value={this.state.batch}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                <option value="">--Select--</option>
                <option value="Morning">Morning</option>
                <option value="AfterNoon">AfterNoon</option>
                <option value="Evening">Evening</option>
              </select>
              <br />
              <br />
              <button type="submit">Submit</button> &nbsp; &nbsp;
              <button type="submit">Reset</button>
              <br />
            </form>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
