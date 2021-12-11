import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateUserComponent from "./components/person/Create";
import ListPersonComponent from "./components/person/List";
import ViewPersonComponent from "./components/person/View";
import Menu from "./components/general/Menu";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />

          <Routes>
            <Route path="/" element={<ListPersonComponent />} />
            <Route path="/persons" element={<ListPersonComponent />} />
            <Route path="/add/:_id" element={<CreateUserComponent />} />
            <Route path="/view/:_id" element={<ViewPersonComponent />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
