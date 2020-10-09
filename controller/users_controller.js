const User = require("../models/user");
const Habit = require('../models/habit');

module.exports.profile = function(req, res){
    Habit.find({}, function(err, habits){
        return res.render('profile', {
            title: "User Profile",
            habits: habits
        })
    })
}

module.exports.signIn = function(req, res){
    return res.render('sign-in', {
        title: "Sign In"
    })
}

module.exports.signUp = function(req, res){
    return res.render('sign-up', {
        title: "Sign Up"
    })
}

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if (err){console.log('Error in finding the user'); return;}

        if (!user){
            User.create(req.body, function(err, user){
                if (err){console.log('Error in signing up'); return;}
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = function(req,res){
    return res.redirect('/users/profile');
}