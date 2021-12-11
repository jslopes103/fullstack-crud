import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import PersonService from "../../service/person.service";

function ViewPersonComponent() {
  const params = useParams();

  const [_id] = useState(params._id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  PersonService.getPersonById(_id).then((res) => {
    let person = res.data;

    setFirstName(person.firstName);
    setLastName(person.lastName);
    setEmail(person.email);
  });

  return (
    <Fragment>
      <br></br>
      <div className="content-wrapper">
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Person Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Person First Name: </label>
              <div> {firstName}</div>
            </div>
            <div className="row">
              <label> Person Last Name: </label>
              <div> {lastName}</div>
            </div>
            <div className="row">
              <label> Person Email: </label>
              <div> {email}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ViewPersonComponent;
