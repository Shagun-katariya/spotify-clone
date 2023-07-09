const mongoose = require('mongoose')

const radar_india = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("radar_india", radar_india)