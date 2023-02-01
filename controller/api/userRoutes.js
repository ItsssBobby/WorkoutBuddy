const router = require("express").Router();
const { User, WorkoutPref } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findAll( {
      where: {id:req.params.id},
      include: [{model:WorkoutPref}]
    });
    if (!userData) {
      res.status(404).json({ message: "No User found with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
