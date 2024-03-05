const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    location:String,
    review:String,
    rating:String,
    Images:String
})

const UserModule = mongoose.model("worstmomoscollections",UserSchema)
module.exports = UserModule