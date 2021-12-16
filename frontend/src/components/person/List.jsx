import React, { useEffect, useState } from "react";
import PersonService from "../../service/person.service";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ViewIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { red, blue } from "@mui/material/colors";

function ListPersonComponent() {
  let [persons, setPersons] = useState([]);

  useEffect(() => {
    PersonService.getPersons().then((res) => {
      const arr = res.data;
      setPersons(arr);
    });
  }, []);

  const DeleteColor = red[500];
  const ViewColor = blue[300];

  const deleteItem = (_id) => {
    PersonService.deletePerson(_id).then(() => {
      setPersons(persons.filter((person) => person._id !== _id));
    });
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3">All contacts</Typography>
          </Grid>
          <Grid item>
            <Button color="success" variant="contained" href={"/add/_add"}>
              Add Person
            </Button>
          </Grid>
        </Grid>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {persons.map((person) => (
                <TableRow key={person._id}>
                  <TableCell align="left">{person.firstName}</TableCell>
                  <TableCell>{person.lastName}</TableCell>
                  <TableCell>{person.email}</TableCell>
                  <TableCell align="right">
                    <IconButton href={`/view/${person._id}`}>
                      <ViewIcon sx={{ color: ViewColor }} />
                    </IconButton>
                    <IconButton href={`/add/${person._id}`}>
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => deleteItem(person._id)}>
                      <DeleteIcon sx={{ color: DeleteColor }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default ListPersonComponent;
