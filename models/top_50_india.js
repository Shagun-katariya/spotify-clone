const mongoose = require('mongoose')

const top_50_india = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("top_50_india", top_50_india)