const Habit = require('../models/habit');

module.exports.profile = function(req, res){
    Habit.find({}, function(err, habits){
        return res.render('week-view', {
            title: 'View', 
            habits: habits
        })
    })
}