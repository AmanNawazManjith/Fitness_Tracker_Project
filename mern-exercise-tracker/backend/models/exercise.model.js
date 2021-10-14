const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    description:{
        type: String,
        require: true
    },
    cost: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;