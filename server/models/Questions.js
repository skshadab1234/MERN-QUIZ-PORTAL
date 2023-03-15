const mongoose = require("mongoose")

const Question = new mongoose.Schema({
    questionId: {type: String, required: true},
    difficulty: {type: String, required: true},
    languages: {type: String, required: true},
    question_name: {type: String, required: true},
    questionImage: {type: String},
    answers : {type: Array},
    correctOutput: {type: String},
    type: {type:String},
    explaination:{type:String}
})

//Model 
const QuestionDb = mongoose.model("questionsdbs", Question)

// export MODULE TO  USE IN OTHER FILES 
module.exports = QuestionDb