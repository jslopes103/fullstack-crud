/**
 * Exports routes
 */
module.exports = (app) => {
  // Importing the required controller inside the function exported
  const persons = require("../controllers/person.controller");
  app.post("/persons", persons.create);
  app.get("/persons", persons.findAll);
  app.get("/persons/:id", persons.findOne);
  app.put("/persons/:id", persons.update);
  app.delete("/persons/:id", persons.delete);
};
