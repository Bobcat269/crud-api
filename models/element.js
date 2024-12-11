const mongoose = require('mongoose');

const elementSchema = mongoose.Schema({
    name: String,
    symbol: String,
    atomicNumber: Number,
});

//register model
const Element = mongoose.model('Element', elementSchema);

module.exports = Element;