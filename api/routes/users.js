const { Router } = require('express')
const userModel = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');
const verifyToken = require('./verify');

const router = Router()

router.get('/', async (req, res) =>{
    try{
        const users = await userModel.find()
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/register', async (req, res) => {
    let new_user = new userModel(req.body)
    try{
        /*
            had to mirror your functions using await since we are using await/async promises (iirc thats the term)
            for the routes

            1. Generates 'salt'
            2. hashes password
            3. assign new hashed password to new_user
            4. new_user.save() to db
            5. return new_user with success: true
        */
        const salt = await bcrypt.genSalt(10);
        const hashed_pass = await bcrypt.hash(new_user.password, salt);
        new_user.password = hashed_pass;

        const user_list = await new_user.save()
        if(!user_list) throw new Error('something went wrong')

        // set password property to '' before returning
        user_list.password = '';
                
        const response = {
            user: user_list,
            success: true,
        }
        res.status(200).json(response);
    }catch(error) {
        /*
            We can handle non-unique usernames by not returning an error
            but handling the issue properly by sending a success: false
            if and only if try/catch detects error code 11000 = non-uniqueness found
        */
        if (error.name === 'MongoError' && error.code === 11000){
            /*
                Code 11000 is for duplicate unique element found
            */
            const error_ret = {
                success: false,
            }
            res.status(200).json(error_ret);
        }
        else {
            /*
                Any other error we cannot or will not handle
            */
            console.log(error.message)
            res.status(500).json({ message: error.message })
        }
    }
});

router.post('/login', (req, res) => {
    userModel.findOne({
        email: req.body.email
    }).then(user => {        
        if (!user) {
            return res.status(404).json({
                msg: "Username is not found.",
                success: false
            });
        }
        // If there is user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user._id,
                    idno: user.idno,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                }
                jwt.sign(payload, secret, {
                    expiresIn: 604800
                }, (err, token) => {
                    console.log("login success.");
                    return res.status(200).json({
                        "auth-token": token,
                        "user": payload,
                        msg: "Login success.",
                        success: true
                    });
                })
            } else {
                return res.status(404).json({   // token is undefined since it doesn't exist
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });
});

module.exports = router;
