const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    html: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: Date,
        required: true
    }
})

const Place = mongoose.model('location', placeSchema);

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,

    }
})

const User = mongoose.model('User', userSchema);
module.exports = {Place, User}