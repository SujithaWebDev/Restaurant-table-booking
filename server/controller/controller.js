const modelfilecalling=require('../model/model');

exports.create=(req,res)=>{
    const datasaving= new modelfilecalling({
        guestname:req.body.guestname,
        phoneno:req.body.phoneno,
        restaurantoptions:req.body.restaurantoptions,
        guestcount:req.body.guestcount,
        date:req.body.date,
        time:req.body.time
    })
    datasaving.save().then((dddd)=>{
        console.log(dddd);
        res.redirect('/details');
    })
}
//getting data from mongoDB
exports.getting=(req,res)=>{
    modelfilecalling.find().then((details)=>{
        res.send(details);
    });
}