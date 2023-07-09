const mongoose = require('mongoose')

const punjabi101 = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("punjabi101", punjabi101)