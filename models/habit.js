const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    freq: {
        type: String,
        required: true
    },
    streak: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;