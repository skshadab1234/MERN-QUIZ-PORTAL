const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")
const Settings = require("../models/settings")
const QuestionDb = require("../models/Questions")
const bcrypt = require("bcryptjs")
const pageAuth = require("../middleware/pageAuth")

router.post('/register', async (req, res) => {    
    const password = 'cesa@1234'
    if(req.body.insertType== 'table' ) {
        var data = req.body.values
    }else{
        var data = req.body
    }
    const { email, candidate_name, Semester, YearofStudy, myround_no } = data
    const testOn = true
    try {
        console.log(req.body);
        const UserExists = await User.findOne({ email: email });

        if (UserExists) {
            res.status(400).json({ status: 400, message: "User Already Exists" });
        } else {
            const user = new User({ email, candidate_name, password, Semester, YearofStudy, testOn, questionsAssigned:[], SubmittedTime: '',  myround_no })
            await user.save();
            res.status(200).json({ status: 200, message: "Registered Successfully" });
        }


    } catch (error) {
        console.log(error)
    }
})

// Login Route 
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        const userData = await User.findOne({ email: email })

        if (!userData) {
            res.status(400).json({ message: "Invalid Data" })
        } else {
            // Getting Generated Tokens 
            const token = await userData.generateAuthToken()

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            const isMatch = await bcrypt.compare(password, userData.password)
            if (isMatch) {
                res.status(200).json({ message: "Logged Successfully" })
            } else {
                res.status(400).json({ message: "Invalid Credentials" })
            }
        }
    } catch (error) {
        console.log(error);
    }
})

// Submit Test 
router.post("/uploadTest", async (req, res) => {
    try {
        const { _id, answerData } = req.body
        const updateData = await User.updateOne({ _id }, { $set: { UserTestResponse: answerData } })
        res.status(200).send({ message: 'Submitted', answerData })
    } catch (error) {
        res.status(499).send({ message: 'err' })

    }
})


// Profile Page Router
router.get("/profile", pageAuth, (req, res) => {
    res.send(req.rootUser)
    // console.log(req.rootUser);
})

router.get("/getdata", pageAuth, (req, res) => {
    res.send(req.rootUser)
    res.status(200).send("User Founded this user")
    // console.log(req.rootUser);
})

router.post("/UserFullList", async (req, res) => {
    try {
        const batch_number = req.body.value
        const data = await User.find({ myround_no: batch_number });
        res.status(200).send(data)
    }
    catch { err => res.status(400).send("Something went Wrong") };
})

router.post("/allUsers", async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data)
    }
    catch { err => res.status(400).send("Something went Wrong") };
})
router.get("/logout", (req, res) => {
    res.clearCookie("jwtoken", { path: '/' })
    // console.log(req.rootUser);
    res.status(200).send("Logout Successfully")
})

// End Test Router 
router.post("/EndTest", async (req, res) => {
    try {
        const { _id, SubmittedTime } = req.body
        const updateData = await User.updateOne({ _id }, { $set: { testOn: "false", SubmittedTime } })
        res.status(200).send("Updated Result")
    } catch (error) {
        res.status(400).send("Something went Wrong");
    }
})

router.post("/settings", async (req, res) => {
    try {
        const rootSettings = await Settings.find()
        res.send(rootSettings)
    } catch (error) {
        res.status(400).send("Something went Wrong!!")
    }
})

router.post("/getWinnersList", async (req, res) => {
    try {
        const UserQuestionAnswerList = []
        const QuestionsFromClient = req.body
        const Results = await User.find()
        const allquestion = QuestionsFromClient.QuestionsData
        Results.map((win_res, i) => {
            const { candidate_name, email, SubmittedTime, Semester, YearofStudy, score, myround_no } = win_res
            let SubmitTime = new Date(SubmittedTime).getTime() // Making time to Timestamp so that we can sort it on this basis only
            win_res.UserTestResponse.map((question, index) => {
                const { questionId, answer } = question
                UserQuestionAnswerList.push({ candidate_name, email, Semester, score, YearofStudy, SubmitTime, SubmittedTime, candidate_name, email, myround_no })
            })

        })
        res.status(200).send(UserQuestionAnswerList)
    } catch (error) {
        res.status(400).send("Something went Wrong!!")
    }

})


// Get Score of Each User and Update his score
router.post("/GetUserScore", async (req, res) => {
    try {
        const { _id, UserTestResponse } = req.body.data
        const allque = req.body.QuestionsData

        // Check all answered questions with database correctanswer
        let score = 0
        UserTestResponse.map((res, i) => {
            if (res.answer == allque[res.questionId - 1].correctOutput) {
                score += 4
            }
        })
        // console.log(score)
        const updateScore = await User.updateOne({ _id: _id }, { $set: { score: score } })
        // Take this "score" and update it in database 
    } catch (error) {
        res.send("Something went Wrong");
    }
})

router.post("/changeStatus", async (req, res) => {
    try {
        const {newStatus, _id} = req.body
        const updateData = await User.updateOne({ _id }, { $set: { status: newStatus } });
        if(updateData) {
            res.status(200).send({status:200, message:'Status Successfully Updated'})
        }else{
            res.status(400).send({status:400, message:'Something Went Wrong'})

        }
    } catch (error) {
        res.send("Something went Wrong");
    }
})
router.get("/ResetAllUserAnswer", async (req, res) => {
    try {

        const updateData = await User.updateMany({name:""}, {$set: { testOn: "true", UserTestResponse: [], SubmittedTime: '', score: 0, status: 1}})
        const newData = [];
        for (let i = 1; i <= 30; i++) {
            newData.push(i);
        }

        // const updateData = await User.updateMany({ name: "" }, { $set: { questionsAssigned: newData } });

        res.send(updateData)
    } catch (error) {
        res.send("Something went Wrong");
    }
})

module.exports = router