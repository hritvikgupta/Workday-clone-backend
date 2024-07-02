const mongoose = require('mongoose')
const signUps = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, 'Must Provide a name']
    },
    email:{
        type:String, 
        required:[true, 'Must Provide an Email address']
    },
    password:{
        type:String, 
        required:[true, 'Must provide an password']
    },
    

})


module.exports = mongoose.model('signUps', signUps)