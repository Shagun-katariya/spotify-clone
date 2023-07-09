const mongoose = require('mongoose')

const equal_india = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("equal_india", equal_india)