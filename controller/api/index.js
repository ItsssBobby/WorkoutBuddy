const router = require('express').Router();
const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const workoutPrefRoutes = require('./workoutPrefRoutes');

router.use('/User', userRoutes);
// router.use('/Login', loginRoutes);
// router.use('/Post', postRoutes);
router.use('/WorkoutPref', workoutPrefRoutes);

module.exports = router;