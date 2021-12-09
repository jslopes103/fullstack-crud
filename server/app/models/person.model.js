const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    emailId: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Person', PersonSchema);