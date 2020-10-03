const Habit = require('../models/habit');

module.exports.create = function(req,res){
    Habit.create({
        content: req.body.habit,
        freq: req.body.frequency,
        streak: req.body.streak,
        user: req.user.id
    }, function(err, user){
        if (err){console.log(err,'Error in finding the user'); return;}
        return res.redirect('back');
    })
}