// Import axios to make API calls
import axios from "axios";
const PERSONS_API_BASE_URL = "http://localhost:9000/persons";

// Creating service class to provide function to make API calls inside yout components
class PersonService {
  getPersons() {
    return axios.get(PERSONS_API_BASE_URL);
  }
  createPerson(person) {
    return axios.post(PERSONS_API_BASE_URL, person);
  }
  getPersonById(personID) {
    return axios.get(PERSONS_API_BASE_URL + "/" + personID);
  }
  updatePerson(person, personID) {
    return axios.put(PERSONS_API_BASE_URL + "/" + personID, person);
  }
  deletePerson(personID) {
    return axios.delete(PERSONS_API_BASE_URL + "/" + personID);
  }
}
export default new PersonService();
