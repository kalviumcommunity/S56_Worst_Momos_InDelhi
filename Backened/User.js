const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
location:String,
review:String,
ratings:Number,
img:String,
createdby:String
})
// const UserDetails = new mongoose.Schema({
//     username:String
// })

UserSchema.set("versionKey",false)
const UserModule = mongoose.model("worstmomoscollection",UserSchema)
// const UserDetail = mongoose.model("username_col",UserDetails)
module.exports = {UserModule}