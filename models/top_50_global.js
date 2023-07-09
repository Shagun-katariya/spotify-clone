const mongoose = require('mongoose')

const top_50_global = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("top_50_global", top_50_global)