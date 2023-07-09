const mongoose = require('mongoose')

const india_india = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("india_india", india_india)