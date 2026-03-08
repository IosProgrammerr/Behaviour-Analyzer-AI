const BehaviourDetails = require("../model/behaviourDetails");

const UserBehaviour = async (req, res) => {
  const { site, duration} = req.body;
  try {
    const newBehaviourDetail = new BehaviourDetails({site, duration});
    await newBehaviourDetail.save();
    res.json({ message: "behaviour saved successfully"});
  } catch (error) {
    console.error("Error Behaviour : ", error.message);
    res
      .status(500)
      .json({message: "Failed to save behaviour", error: error.message});
  }
}

module.exports = {UserBehaviour}