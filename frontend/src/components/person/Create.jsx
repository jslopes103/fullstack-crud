import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Fab,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersonService from "../../service/person.service";
import BackIcon from "@mui/icons-material/ChevronLeft";

function CreatePersonComponent() {
  const params = useParams();
  const navigate = useNavigate();

  const [_id] = useState(params._id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameError, setFirstNameError] = useState(true);
  const [lastNameError, setLastNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  useEffect(() => {
    if (_id !== "_add") {
      PersonService.getPersonById(_id).then((res) => {
        let person = res.data;

        setFirstName(person.firstName);
        setLastName(person.lastName);
        setEmail(person.email);

        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
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

    setFirstNameError(false);
    if (event.target.value.trim() === "") {
      setFirstNameError(true);
    }
  };

  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);

    setLastNameError(false);
    if (event.target.value.trim() === "") {
      setLastNameError(true);
    }
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);

    setEmailError(false);

    if (
      event.target.value.trim() === "" ||
      !event.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailError(true);
    }
  };

  const getTitle = () => {
    if (_id === "_add") {
      return "Add Contact";
    } else {
      return "Update Contact";
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 10,
        pb: 6,
      }}
    >
      <Container>
        <Fab
          sx={{
            my: -4,
            mx: -4,
          }}
          color="primary"
          href="/"
        >
          <BackIcon />
        </Fab>
        <Card component="form" noValidate>
          <CardContent>
            <Typography variant="h6">{getTitle()}</Typography>
            <Divider
              sx={{
                p: 1,
              }}
            />
            <Grid
              container
              spacing={2}
              sx={{
                p: 1,
                width: "100%",
              }}
            >
              <Grid
                item
                sx={{
                  width: "50%",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  required
                  name="firstName"
                  error={firstNameError}
                  label="First name"
                  value={firstName}
                  helperText="First name is Required"
                  onChange={changeFirstNameHandler}
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "50%",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  required
                  name="lastName"
                  error={lastNameError}
                  label="Last name"
                  value={lastName}
                  helperText="Last name is Required"
                  onChange={changeLastNameHandler}
                />
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                }}
              >
                <TextField
                  variant="standard"
                  fullWidth
                  required
                  name="email"
                  error={emailError}
                  label="E-mail"
                  value={email}
                  helperText="E-mail is Required and needs to be valid"
                  onChange={changeEmailHandler}
                />
              </Grid>
            </Grid>
            <Grid container direction="row-reverse">
              <Grid item>
                <Button type="button" variant="outlined" href="/" sx={{ m: 1 }}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={saveOrUpdatePerson}
                  sx={{ m: 1 }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </CardContent>

          {/* <button
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
                    </Link> */}
        </Card>
      </Container>
    </Box>
  );
}

export default CreatePersonComponent;
