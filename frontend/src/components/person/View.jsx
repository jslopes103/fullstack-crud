import React, { Component } from "react";
import PersonService from "../services/PersonService";

class ViewPersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params._id,
      person: {},
    };
  }
  componentDidMount() {
    PersonService.getPersonById(this.state._id).then((res) => {
      this.setState({ person: res.data });
    });
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="content-wrapper">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center"> View Person Details</h3>
            <div className="card-body">
              <div className="row">
                <label> Person First Name: </label>
                <div> {this.state.person.firstName}</div>
              </div>
              <div className="row">
                <label> Person Last Name: </label>
                <div> {this.state.person.lastName}</div>
              </div>
              <div className="row">
                <label> Person Email: </label>
                <div> {this.state.person.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewPersonComponent;
