const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")

const pageAuth = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken // kwtoken ki jagah aapne token ka naam likhe
        const verifyToken = jwt.verify(token, process.env.SECRET_CHAR)

        const rootUser = await User.findOne({ _id : verifyToken._id, "tokens.token" : token })

        if(!rootUser) { throw new Error("User Data cannot find")}
        req.token = token;
        req.rootUser = rootUser;
        req.UserId = rootUser._id
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("Unauthorized: No token Found")
    }
}

module.exports = pageAuth