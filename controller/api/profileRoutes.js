const router = require("express").Router();
const { Profile, Workout, Post } = require("../../models");


//Get a profile by id
router.get("/:id", async (req, res) => {
  try {
    const profileData = await Profile.findAll({
      attributes: {exclude:['password']},
      where: {id:req.params.id},
      include: [{
        model:Post,
        attributes: {exclude:['profileId']}
      },
    {
      model:Workout,
      attributes: {exclude:['profileId']}
    }],
      // include: [{model:Post}],
    });
    if (!profileData) {
      res.status(404).json({ message: "No User found with this id!" });
      return;
    }
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Create a new profile
router.post("/", async (req, res) => {
  try {
    // create a new profile
    const profileData = await Profile.create(req.body);
    res.status(200).json(profileData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update an existing profile
router.put("/:id", async (req, res) => {
  try {
  // update a category by its `id` value
    const ProfileData = await Profile.update(req.body,{
      where: {
        id: req.params.id,
      },
    });
    if (!ProfileData) {
      res.status(404).json({ message: "No Profile found with this id!" });
      return;
    }
    res.status(200).json(ProfileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
