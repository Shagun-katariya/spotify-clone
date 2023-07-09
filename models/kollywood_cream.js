const mongoose = require('mongoose')

const kollywood_wood = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("kollywood_wood", kollywood_wood)