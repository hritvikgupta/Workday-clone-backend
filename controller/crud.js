const signUps = require('../models/schema');
const {v4:uuidV4} = require('uuid')
const {setUser} = require('../service/auth')
const sessionId = uuidV4()
const personalDetailsSchema  = require('../models/personalDetailsSchema')

const postUser = async (req, res) => {
    try {
        const newUser = await signUps.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log('error creating new user', error.message);
        res.status(400).json({ msg: error.message });
    }
};

const getUser = async (req, res) => {
    const { id: userID } = req.params;
    try {
        const getCurrentUser = await signUps.findById(userID); // Correct usage here
        if (!getCurrentUser) {
            return res.status(404).json({ message: "No User Found" });
        }
        res.status(200).json({ getCurrentUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(`Received email: ${email}, password: ${password}`);
    try {
        const user = await signUps.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid Username or Password" });
        }
        const token = setUser(user);
        res.cookie('uid', token, {
            httpOnly: true,
            secure: true, // Make it  true and None to None if not working in production env
            sameSite: 'None' // Make it  false and Lax to None if not working in local env
        });
        return res.status(200).json({ message: "Login Successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPersonInfoUser = async (req, res) => {
    const { id: userID } = req.params;

    try {
        const getCurrentUserDetails = await personalDetailsSchema.findById({userID});
        if (!getCurrentUserDetails) {
            return res.status(404).json({ message: "No User Found" });
        }
        res.status(200).json(getCurrentUserDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getAllApplications = async (req, res) => {
    try {
        const allApplications = await personalDetailsSchema.find({ createdBy: req.user._id });
        if (allApplications.length === 0) {
            return res.status(404).json({ message: "No Applications Found" });
        }
        res.status(200).json(allApplications);
    } catch (error) {
        console.error("Error fetching applications:", error.message);
        res.status(500).json({ message: error.message });
    }
};

const postPeronalInfoUser = async (req, res) => {
    const body = req.body;
    try {
        const newUserInfo = await personalDetailsSchema.create({
            name:body.name,
            email:body.email,
            phone:body.phone,
            phoneType:body.phoneType,
            city:body.city,
            streetAddress:body.streetAddress,
            zipcode:body.zipcode,
            state:body.state,
            createdBy:req.user._id
        });
        res.status(201).json(newUserInfo);
    } catch (error) {
        console.log('error creating new user', error.message);
        res.status(400).json({ msg: error.message });
    }
}
module.exports = { getUser, postUser, loginUser,getPersonInfoUser,postPeronalInfoUser, getAllApplications };
