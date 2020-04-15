const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    surName: {
        type: String,
        required: true,
    },
    otherName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const User = mongoose.model('User', UserSchema);

module.exports = User;