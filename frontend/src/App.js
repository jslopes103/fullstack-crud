import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUserComponent from "./components/person/Create";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route
              path="/add-person/:_id"
              component={CreateUserComponent}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
