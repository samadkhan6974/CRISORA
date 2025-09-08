// const fs = require('fs');
// fs.rename("sam.txt","samad.txt",function(e){
//     if(e){
//         console.log(e)
//     }else{
//         console.log("done")
//     }
// })

//  const fs = require('fs');

//  fs.copyFile("samad.txt", "./copy/chacha.txt", function(err){
//     if(err) {console.error(err.message);}
//     else {console.log("done");}})

//  const fs = require('fs');
//  fs.unlink("chacha.txt", function(err){
//  if(err) console.error(err);
//  else console.log("removed");
//  })

//  const fs = require('fs');
//  fs.rmdir("./copy" , function(err){
//     if(err) console.error(err);
//     else console.log("removed")    
//  })

//  DYNAMIC ROUTING
// HOW TO GET DATA COMING FROM FROTEND AT BACKEND ROUTE
// SETING UP PARSERS FOR FORM
// SETTING UP EJS FOR EJS PAGES
//>> INSTALL EJS FROM NPM
//>>SETUP EJS AS A MIDDLEWARE FOR VIEW ENGINE
// SETTING UP STATIC FILES

// const http = require('http');
// const server = http.createServer(function (req, res){
//     res.end("hello world");

// })

// server.listen(3000);

// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.get("/",function(req, res){
//     res.end("chal rha hai")
// });
// app.listen(3000, function (){
// console.log("its running");
// })

// STARTING SERVER PORTFOLIO

// const express = require('express');
// const app = express();
// const path = require("path");


// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.set("views",path.join(__dirname,"views"))
// app.set('view engine','ejs');

// app.listen(8080, function (){
//     console.log("its running");
// })

// app.get("/",function(req, res){
//     res.render("index.ejs")
// });
// app.get("/",(req,res)=>{
//     res.render("index.ejs")
// })
// app.get("/contactme",(req,res)=>{
//     res.send("you are in contact page")

// END


// USING TAILWIND, CREATING SERVER  , FONT CHANGE , CREATE FOLDERS IN FOLDERS PUBLIC
// EXPRESS FONT IN STYLE CSS AND STORE IMAGE IN IMAGES FOLDER RUN IT ON INDEX JS
// const express = require('express');

// HACKATHON FILES 

const express = require("express")
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // <-- fixed here
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"views")));

app.listen(8080, function () {
    console.log("its running");
});
app.get("/",(req,res)=>{
    res.render("homepage.ejs")
})
app.get("/confirmation", function (req, res) {
    res.render("confirmation.ejs");
});

app.get("/emergency",(req,res)=>{
    res.render("emergency.ejs")
})



app.get("/donation",(req,res)=>{
    res.render("donation.ejs")
})

app.get("/homepage",(req,res)=>{
    res.render("homepage.ejs")
})


// DYNAMIC ROUTING

// const express = require('express');
// const app = express();
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public'))); 

// app.set('view engine', 'ejs');
// app.get("/", function(req ,res){
//     res.render("index"); 
// }); 

// app.get("/profile/:username", function(req, res) {
//     res.send(`welcome , ${req.params.username}`);
// });

// app.get("/author/:username/:age", function(req, res) {
//     res.send(`welcome , ${req.params.username} of age ${req.params.age}`);
// });

// app.listen(3000,function(){
//     console.log("its running");
// });
 