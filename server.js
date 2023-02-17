const express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5500, function(error){
    if(error) throw errors
    console.log("Server created Successfully");
});

// subscribe mails
app.get("/", function(req, res){
  
    var email = req.query.email
    console.log("email:",email);
})
// app.post("/index",function(req,res){
//     res.sendFile(index.html)
// })
// app.post("/contact",function(req,res){
//     res.sendFile(contact.html)
// })

app.get("/index.html",function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
    var name = req.query.name
    var email = req.query.email
    var subject = req.query.subject
    var message = req.query.message
    console.log("Someone contact you");
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Subject:",subject);
    console.log("Message:",message);

})

app.get("/payment/index.html",function(req,res){
    res.sendFile(path.join(__dirname+'/payment/index.html'))
    var name = req.query.name
    var street = req.query.street-address
    var zip = req.query.postal-code
    var city = req.query.city
    var country = req.query.country
})

app.get("/contact.html",function(req,res){
    res.sendFile('contact.html',{root:__dirname})
});

app.get("/cart/index.html",function(req,res){
    res.sendFile(path.join(__dirname+'/cart/index.html'))
});

app.get("/address/index.html",function(req,res){
    res.sendFile(path.join(__dirname+'/address/index.html'))
});



app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});
/*
const db_link = "mongodb+srv://Abhishek:Emmabhi%4015@cluster0.kc5sv9w.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db_link)
.then(function(db){
    console.log(db);
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});

const userSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true
    },
    qt:{
        type:Number,
        
    },
    price:{
        type:Number,
        trim: true,
        required:true
    },
    image:{
        type:String,
        
    },
    username:{
        type:String,
        trim:true
    }
});
/*
const userModel = mongoose.model('userModel',userSchema);

(async function createuser(){
    let user = {
        firstname:"Abhishek",
        lastname:"Sharma",
        email:"ab@gmail.com",
        phone:699999,
        password:"eree@34",
        category_doc:true,
        category_pat:false
       };
      let data =  await userModel.create(user);
      console.log(data);
})();*/