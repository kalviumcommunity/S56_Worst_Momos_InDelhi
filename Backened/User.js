const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    location:String,
    review:String,
    rating:String,
    Images:String
})

const UserModule = mongoose.model("WorstmomosCollections",UserSchema)
module.exports = UserModule