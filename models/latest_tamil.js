const mongoose = require('mongoose')

const latest_tamil = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("latest_tamil", latest_tamil)