const mongoose = require('mongoose')
const personalDetails = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, 'Must Provide a name']
    },
    email:{
        type:String, 
        required:[false, 'Must Provide an Email address']
    },
    phoneType:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:[false, '']
    },
    city:{
        type:String,
        required:false
    }, 
    streetAddress:{
        type:String, 
        required:false
    }, 
    zipcode:{
        type:String, 
        required:false
    }, 
    state:{
        type:String, 
        required:false
    }, 
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"schema"
    }

    

})


module.exports = mongoose.model('personalDetails', personalDetails)