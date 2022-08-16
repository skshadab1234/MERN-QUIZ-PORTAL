const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")
const Settings = require("../models/settings")
const QuestionDb = require("../models/Questions")
const bcrypt = require("bcryptjs")
const pageAuth = require("../middleware/pageAuth")

router.post('/register', async (req,res) => {
    const { email, candidate_name, password, Semester, YearofStudy } = req.body
    const testOn = true 
    try {
        const UserExists = await User.findOne({email:email});

        if(UserExists)
        {
            res.status(400).json({ message: "User Already Exists"});
        }else{
            const user = new User({email, candidate_name, password, Semester, YearofStudy, testOn})
            await user.save();
            res.status(200).json({ message: "Registered Successfully"});
        }


    } catch (error) {
        console.log(error)
    }
})

// Login Route 
router.post("/login",async (req, res) => {
    try {
        const {email, password} = req.body

        const userData = await User.findOne({email: email})

        if(!userData) {
            res.status(400).json({message: "Invalid Data"})
        }else{
            // Getting Generated Tokens 
            const token = await userData.generateAuthToken()
            
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            const isMatch = await bcrypt.compare(password, userData.password)
            if(isMatch){
                res.status(200).json({message: "Logged Successfully"})
            }else{
                res.status(400).json({message: "Invalid Credentials"})
            }
        }
    } catch (error) {
        console.log(error);
    }
})

// Submit Test 
router.post("/uploadTest", async (req,res) => {
    try {
        const {_id, answerData} = req.body
        const updateData = await User.updateOne({_id}, {$set: { UserTestResponse : answerData}})
        res.status(200).send("Submitted")
    } catch (error) {
        res.status(400).send("Something went Wrong");
    }
})

// Profile Page Router
router.get("/profile", pageAuth, (req,res) => {
    res.send(req.rootUser)
    // console.log(req.rootUser);
})

router.get("/getdata", pageAuth, (req,res) => {
    res.send(req.rootUser)
    res.status(200).send("User Founded this user")
    // console.log(req.rootUser);
})

router.get("/logout", (req,res) => {
    res.clearCookie("jwtoken", {path: '/' })
    // console.log(req.rootUser);
    res.status(200).send("Logout Successfully")
})

// End Test Router 
router.post("/EndTest", async (req,res) => {
    try {
        const {_id, SubmittedTime} = req.body
        const updateData = await User.updateOne({_id}, {$set: { testOn : "false", SubmittedTime }})
        res.status(200).send("Updated Result")
    } catch (error) {
        res.status(400).send("Something went Wrong");
    }
})

router.post("/settings", async (req,res) => {
    try {
        const rootSettings = await Settings.findOne()
        res.send(rootSettings)
    } catch (error) {
        res.status(400).send("Something went Wrong!!")
    }
    
})

router.post("/getWinnersList", async (req,res) => {
    try {
        const UserQuestionAnswerList = []
        const QuestionsFromClient = req.body
        const Results = await User.find()
        Results.map((win_res, i) => {
            const { candidate_name, email, SubmittedTime } = win_res
            win_res.UserTestResponse.map((question,index) => {
                const {questionId,answer} = question
                UserQuestionAnswerList.push({questionId, answer, candidate_name, email, SubmittedTime})
            })
            // List.push(win_res.UserTestResponse, win_res.candidate_name, win_res.email)
        })
        

        // Yaha pe aab user ke answer aur databse ke question ko match krke answer choose krna hai 
        const allquestion = QuestionsFromClient.QuestionsData
        UserQuestionAnswerList.map((check_ans, i) => {
            conosole.log(check_ans)
            // const ClientQuestionNo = allquestion[i].questionId // Compare karne ke liye
            // const correctOutput = allquestion[i].correctOutput
            
            // console.log(check_ans.answer, correctOutput)
            // if(check_ans.answer == correctOutput) {
            // }
        })
        
    } catch (error) {
        res.status(400).send("Something went Wrong!!")
    }
    
})






module.exports = router