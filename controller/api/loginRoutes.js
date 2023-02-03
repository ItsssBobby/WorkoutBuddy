const router = require("express").Router();
const { Login, User, Post, WorkoutPref } = require('../../models')

// The /api/Login endpoint

// get all login
router.get('/login', async (req,res) => {
    res.render('login');
});


module.exports = router;









//     try {
//         const loginData = await Login.findAll( {
//             where: {username:req.params.username},
//             include: [{model:User}]
//         });
//         if (!loginData) {
//             res.status(404).json({ message: 'No user found with this username'});
//             return;
//         }
//         else
//         res.status(200).json(loginData);
//     }   catch (err) {
//         res.status(500).json(err)
//     }
// })


    // router.get("/", async (req, res) => {
    //     try{
    //         res.status(200).json();
    //     } catch (err) {
    //         res.status(500).json(err)
    //     }