const mongoose = require('mongoose');

const mongodbdetails=new mongoose.Schema({
    guestname:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    restaurantoptions:{
        type:String,
        required:true
    },
    guestcount:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})
const mongodbdetailsexport =mongoose.model("restauranttablebookingdb",mongodbdetails);
module.exports=mongodbdetailsexport;