import React, { Component } from "react";
import axios from "axios";
import StudentData from "./StudentData";
import Topbar from "./Topbar";
import "./form.css";

export default class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      id: "",
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      course: "",
      language: "",
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://62cf0d49826a88972d08517c.mockapi.io/students"
    );
    // console.log(response.data);
    this.setState({ user: response.data });
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.state.id) {
      //update
      const response = await axios.put(
        `https://62cf0d49826a88972d08517c.mockapi.io/students/${this.state.id}`,
        {
          id: this.state.id,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          gender: this.state.gender,
          email: this.state.email,
          course: this.state.course,
          language: this.state.language,
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
        gender: "",
        email: "",
        course: "",
        language: "",
      });
    } else {
      //create

      const response = await axios.post(
        "https://62cf0d49826a88972d08517c.mockapi.io/students",
        {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          gender: this.state.gender,
          email: this.state.email,
          course: this.state.course,
          language: this.state.language,
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
        gender: "",
        email: "",
        course: "",
        language: "",
      });
    }
  };

  handleDelete = async (id) => {
    const response = await axios.delete(
      `https://62cf0d49826a88972d08517c.mockapi.io/students/${id}`
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
      gender: selectedData.gender,
      email: selectedData.email,
      course: selectedData.course,
      language: selectedData.language,
    });
  };

  render() {
    return (
      <div>
        <Topbar sx={{ position: "static" }} />
        <div className="form">
          <StudentData
            user={this.state.user}
            handleDelete={(id) => {
              this.handleDelete(id);
            }}
            onPopulatedData={(id) => {
              this.onPopulatedData(id);
            }}
          />
        </div>
      </div>
    );
  }
}
