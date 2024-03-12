const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
location:String,
review:String,
rating:String,
img:String
})

const UserModule = mongoose.model("worstmomoscollection",UserSchema)
module.exports = UserModule