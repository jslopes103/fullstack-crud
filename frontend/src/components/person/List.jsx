import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PersonService from "../../service/person.service";

function ListPersonComponent() {
  let [persons, setPersons] = useState([]);

  useEffect(() => {
    PersonService.getPersons().then((res) => {
      const arr = res.data;
      setPersons(arr);
    });
  }, []);

  const deleteItem = (_id) => {
    PersonService.deletePerson(_id).then(() => {
      setPersons(persons.filter((person) => person._id !== _id));
    });
  };

  return (
    <Fragment>
      <div className="content-wrapper">
        <h2 className="text-center">Persons List</h2>
        <div className="row">
          <Link className="btn btn-primary" to={"/add/_add"}>
            Add Person
          </Link>
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
              {persons.map((person) => (
                <tr key={person._id}>
                  <td> {person.firstName} </td>
                  <td> {person.lastName}</td>
                  <td> {person.email}</td>
                  <td>
                    <Link to={`/add/${person._id}`} className="btn btn-info">
                      Update
                    </Link>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-danger"
                      onClick={() => deleteItem(person._id)}
                    >
                      Delete
                    </button>
                    <Link
                      style={{ marginLeft: "10px" }}
                      to={`/view/${person._id}`}
                      className="btn btn-info"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default ListPersonComponent;
