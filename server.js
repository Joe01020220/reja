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
     // console.log(req.body);
      //res.json({test:"success"});
});

// Request => Tradational & Rest (API) & Grahql(Nester)
// Request => Header & body

app.get('/author', (req, res) => {
  res.render("author", {user: user});
})

app.get("/",function (req,res) {
      res.render('harid');
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
