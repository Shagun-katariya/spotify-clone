const mongoose = require('mongoose')

const tollywood_pearls = mongoose.Schema({
    songName: String,
    filePath: String,
    time: String,
    coverPath: String,
});

module.exports=mongoose.model("tollywood_pearls", tollywood_pearls)