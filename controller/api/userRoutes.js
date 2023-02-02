// const router = require('express').Router();
// const { User, } = require('../../models');
// const bcrypt = require('bcrypt');

// router.post('/', async (req, res) => {
//     try {
//       const userInfo = await User.create(req.body);
        //added bcrypt to hash passwords
//       newUser.password = await bcrypt.hash(req.body.password, 10);
//       req.session.save(() => {
//         req.session.user_id = userInfo.id;
//         req.session. = true;
  
//         res.status(200).json(userInfo);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

//   router.post('/login', async (req, res) => {
//     try {
//       const userInfo = await User.findOne({ where: { email: req.body.email } });
  
//       if (!userInfo) {
//         res
//           .status(400)
//           .json({ message: 'User not found, please try again.' });
//         return;
//       }
  
//       const correctPassword = await userInfo.checkPw(req.body.password);
  
//       if (!correctPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect password, please try again' });
//         return;
//       }
  
//       req.session.save(() => {
//         req.session.user_id = userInfo.id;
//         req.session.logged_in = true;
        
//         res.json({ user: userInfo, message: 'You are now logged in!' });
//       });
  
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
  
    