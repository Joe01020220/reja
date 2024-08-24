console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data)=> {
  if(err) {
    console.log("ERROR:",err);
  } else {
    user = JSON.parse(data)
  }
});

//MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

// 1 Kirish kodlar
app.use(express.static("public")); //imiglar uchun
app.use(express.json()); // datani object ga ugartiradi 
app.use(express.urlencoded({ extended: true })); //html dan form request qiladi

// 2 Session ga bogliq

// 3   Views ga bogliq codlar
//ejs orqali frontentni yasaymiz backendni ichida
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing ga bogliq code

/*app.get("/Class", function (req, res) {
  res.end(`<h1 style="background: green" >Hello Theo welcome to MIT </h1>`);
});*/

app.post("/create-item", (req,res) => {
      console.log("user entered /create-item");
      const new_reja = req.body.reja;
      db.collection("plans").insertOne({reja: new_reja}, (err,data) => {

        res.json(data.ops[0]);
      });
});

// Request => Tradational & Rest (API) & Grahql(Nester)
// Request  Structure => Header & body
// API merhod =>  get post

//app.get('/author', (req, res) => {
  //res.render("author", {user: user});
//});

// DELETE 
app.post("/delete-item", (req,res) => {
  const id = req.body.id;
  db.collection("plans")
  .deleteOne({_id: new mongodb.ObjectId(id)}, 
  function(err, data) {
    res.json({ state: "success"});
  }
);
});

// EDIT
app.post("/edit-item", (req,res) => {
const data =req.body;
console.log(data);
db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, 
{$set: {reja: data.new_input}}, 
function (err,data ){
res.json({state: "success"});
})

});

// DELETE all

app.post("/delete-all", (req,res) => {
  if(req.body.delete_all) {
    db.collection("plans")
    .deleteMany(function (){
      res.json({ state: "hamma rejalarni o'chirish"});
    });
  }
});

app.get("/",function (req,res) {
  console.log("user entered /");
  db.collection("plans").
  find()
  .toArray((err, data) => {
    if(err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.render("reja", { items: data });
    }
  });
});

module.exports = app;