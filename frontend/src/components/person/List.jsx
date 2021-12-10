import React, { Component } from "react";
import PersonService from "../../service/person.service";

class ListPersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
    this.addPerson = this.addPerson.bind(this);
    this.editPerson = this.editPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }
  deletePerson(_id) {
    PersonService.deletePerson(_id).then((res) => {
      this.setState({
        persons: this.state.persons.filter((person) => person._id !== _id),
      });
    });
  }
  viewPerson(_id) {
    this.props.history.push(`/view-person/${_id}`);
  }
  editPerson(_id) {
    this.props.history.push(`/add-person/${_id}`);
  }
  componentDidMount() {
    PersonService.getPersons().then((res) => {
      this.setState({ persons: res.data });
    });
  }
  addPerson() {
    this.props.history.push("/add-person/_add");
  }
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <h2 className="text-center">Persons List</h2>
          <div className="row">
            <button className="btn btn-primary" onClick={this.addPerson}>
              {" "}
              Add Person
            </button>
          </div>
          <br></br>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> Person First Name</th>
                  <th> Person Last Name</th>
                  <th> Person Email</th>
                  <th> Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.persons.map((person) => (
                  <tr key={person._id}>
                    <td> {person.firstName} </td>
                    <td> {person.lastName}</td>
                    <td> {person.email}</td>
                    <td>
                      <button
                        onClick={() => this.editPerson(person._id)}
                        className="btn btn-info"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deletePerson(person._id)}
                        className="btn btn-danger"
                      >
                        Delete{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.viewPerson(person._id)}
                        className="btn btn-info"
                      >
                        View{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default ListPersonComponent;
