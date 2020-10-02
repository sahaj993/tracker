const Habit = require('../models/habit');

module.exports.create = function(req,res){
    Habit.create({
        content: req.body.habit,
        freq: req.body.frequency,
        strak: req.body.streak,
        user: req.user._id
    }, function(err, user){
        if (err){console.log('Error in finding the user'); return;}
    })
}