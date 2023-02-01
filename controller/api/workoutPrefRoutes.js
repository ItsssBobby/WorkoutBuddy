const router = require("express").Router();
const { Login, User, Post, WorkoutPref } = require('../../models')

router.get("/", async (req, res) => {
    try{
        const workoutPrefData = await WorkoutPref.findAll({
            attributes: ['workoutType',"difficulty"],
            include: [{model:User, attributes:['email']}]
        });
        res.status(200).json(workoutPrefData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;