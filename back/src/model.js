const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now,
    },
    lastAccess: {
        type: Date,
        required: false,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
