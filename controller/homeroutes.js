const router = require('express').Router();
const { User, WorkoutPref, Login, Post } = require('../models')
// render the homepage
router.get('/', async (req,res) => {
    res.render('homepage', {

    });
});
// render the login page
router.get('/login', (req,res) => {
    res.render('login');
});
// render the profile page
router.get('/profile', (req,res) => {
    res.render('profile')

});

router.get('/post', (req,res) => {
    res.render('post')
});

module.exports = router;