import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PersonService from "../../service/person.service";

function CreatePersonComponent() {
  const params = useParams();
  const navigate = useNavigate();

  const [_id] = useState(params._id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (_id !== "_add") {
      PersonService.getPersonById(_id).then((res) => {
        let person = res.data;

        setFirstName(person.firstName);
        setLastName(person.lastName);
        setEmail(person.email);
      });
    }
  }, [_id]);

  const saveOrUpdatePerson = async (e) => {
    e.preventDefault();
    let person = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    if (_id === "_add") {
      // Create Service
      PersonService.createPerson(person).then(() => {
        navigate("/persons");
      });
    } else {
      console.log("AQ");
      // Update Service
      PersonService.updatePerson(person, _id).then(() => {
        navigate("/persons");
      });
    }
  };

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const getTitle = () => {
    if (_id === "_add") {
      return <h3 className="text-center">Add Person</h3>;
    } else {
      return <h3 className="text-center">Update Person</h3>;
    }
  };

  return (
    <Fragment>
      <br></br>
      <div className="content-wrapper">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Email: </label>
                  <input
                    placeholder="Email Address"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={changeEmailHandler}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdatePerson}
                >
                  Save
                </button>
                <Link
                  className="btn btn-danger"
                  to={"/persons"}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CreatePersonComponent;
