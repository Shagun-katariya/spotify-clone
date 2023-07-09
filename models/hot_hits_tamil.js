const mongoose = require('mongoose')

const hot_hits_tamil = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("hot_hits_tamil", hot_hits_tamil)