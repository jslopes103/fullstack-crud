import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUserComponent from "./components/person/Create";
import ListPersonComponent from "./components/person/List";
import ViewPersonComponent from "./components/person/View";
import UpdatePersonComponent from "./components/person/Update";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" exact component={ListPersonComponent}></Route>

            <Route path="/persons" component={ListPersonComponent}></Route>

            <Route
              path="/add-person/:_id"
              component={CreateUserComponent}
            ></Route>

            <Route
              path="/view-user/:_id"
              component={ViewPersonComponent}
            ></Route>

            <Route
              path="/update-user/:_id"
              component={UpdatePersonComponent}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
