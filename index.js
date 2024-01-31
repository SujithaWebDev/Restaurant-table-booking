console.log('check');
const express=require('express')
const app=express();
const mongoose=require('mongoose')
const path=require('path')

mongoose.connect("mongodb://127.0.0.1:27017/restauranttablebookingdb",{}).then(()=>{
    console.log('db connected');
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static('public'));
app.use("/public", express.static(path.join(__dirname, 'public')));

app.use('/',require('./server/routes/routes'))

// app.get("/",(req,res)=>{
//     res.render("index")
// })

app.listen(4003,()=>{
    console.log("port connected");
});