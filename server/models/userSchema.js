const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    candidate_name: {type: String, required: true},
    password: {type: String, required: true},
    YearofStudy: {type: String, required: true},
    Semester : {type: Number, required : true},
    tokens : [ { token : { type: String, required:true } } ],
    testOn: {type: String, required : true},
    UserTestResponse : {type: Array},
    SubmittedTime: {type: String},
    score: {type: Number},
    questionsAssigned: {type: Array},
    myround_no: {type: Number}
})

// We are making our password hash
userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
})

// We are generating the tokens
userSchema.methods.generateAuthToken = async function() {
    try {
        let payload = {_id:this._id}
        let unique32Char = process.env.SECRET_CHAR
        let token = jwt.sign(payload,unique32Char)
        
        // add this token to database
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token;
    } catch (error) {
        console.log(error);
    }
}

//Model 
const User = mongoose.model("registers", userSchema)

// export MODULE TO  USE IN OTHER FILES 
module.exports = User