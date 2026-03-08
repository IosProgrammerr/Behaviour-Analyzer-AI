const mongoose = require("mongoose")
const behaviourDetailsSchema = new mongoose.Schema({
  site: {
    type: String,
    require: true,
  },
  duration: {
    type: string,
    require: true,
  }
})
module.exports = mongoose.model("BehaviourDetails", behaviourDetailsSchema);