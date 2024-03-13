const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
location:String,
review:String,
rating:String,
img:String
})
UserSchema.set("versionKey",false)
const UserModule = mongoose.model("worstmomoscollection",UserSchema)
module.exports = UserModule