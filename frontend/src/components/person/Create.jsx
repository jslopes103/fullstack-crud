import React, { Component } from "react";
import PersonService from "../../service/person.service";

class CreatePersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params._id,
      firstName: "",
      lastName: "",
      email: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdatePerson = this.saveOrUpdatePerson.bind(this);
  }
  componentDidMount() {
    if (this.state._id === "_add") {
      return;
    } else {
      // Service getPerson
      PersonService.getPersonById(this.state._id).then((res) => {
        let person = res.data;
        this.setState({
          firstName: person.firstName,
          lastName: person.lastName,
          email: person.email,
        });
      });
    }
  }
  saveOrUpdatePerson = (e) => {
    e.preventDefault();
    let person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log("person => " + JSON.stringify(person));

    if (this.state._id === "_add") {
      // Create Service
      PersonService.createPerson(person).then((res) => {
        this.props.history.push("/persons");
      });
    } else {
      // Update Service
      PersonService.updatePerson(person).then((res) => {
        this.props.history.push("/persons");
      });
    }
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  cancel() {
    this.props.history.push("/persons");
  }
  getTitle() {
    if (this.state._id === "_add") {
      return <h3 className="text-center">Add Person</h3>;
    } else {
      return <h3 className="text-center">Update Person</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="content-wrapper">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      placeholder="Email Address"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdatePerson}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreatePersonComponent;
