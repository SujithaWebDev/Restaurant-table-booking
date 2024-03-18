console.log('check');
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const path=require('path')

mongoose.connect("mongodb+srv://2:2@cluster0.umxnhjt.mongodb.net/restauranttablebookingdb",{}).then(()=>{
    console.log('db connected');
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static('public'));
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use('/',require('./server/routes/routes'))

app.listen(10000,()=>{
    console.log("port connected");
});