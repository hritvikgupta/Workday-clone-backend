const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide a name']
    },
    email: {
        type: String,
        required: false
    },
    phoneType: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    streetAddress: {
        type: String,
        required: false
    },
    zipcode: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "schema",
        required: true
    }
});

module.exports = mongoose.model('Application', applicationSchema);
