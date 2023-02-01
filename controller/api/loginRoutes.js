const router = require("express").Router();
const { Login, User, Post, WorkoutPref } = require('../../models')

// The /api/Login endpoint

// get all login
// router.get("/", async (req, res) => {
//     try{
//         const loginData = await Login.findAll({
//             attributes: []
//         })
//         res.status(200).json();
//     } catch (err) {
//         res.status(500).json(err)
//     }


    // router.get("/", async (req, res) => {
    //     try{
    //         res.status(200).json();
    //     } catch (err) {
    //         res.status(500).json(err)
    //     }