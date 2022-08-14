const mongoose = require("mongoose")

const set = new mongoose.Schema({
    testDate: {type:String},
    testGoing: {type:Boolean},
    testTime: {type:String},
})


//Model 
const Settings = mongoose.model("settings", set)

// export MODULE TO  USE IN OTHER FILES 
module.exports = Settings