const mongoose = require('mongoose')

const latest_telugu = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("latest_telugu", latest_telugu)