exports.index=(req,res)=>{
    res.render("index")
}
exports.form=(req,res)=>{
    res.render("form")
}
let axios=require('axios')
exports.details=(req,res)=>{
    axios.get("http://localhost:10000/api/post").then(function(response){
        console.log(response);
        res.render('details',{user:response.data})
    })
    // res.render("details")
}