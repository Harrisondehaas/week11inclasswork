const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const { userInfo } = require("os");

//Sets our view engine to load files ending in .ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(expressSession({
  resave: false,
  saveUninitialized:true,
  secret:"very secret key"
}))

const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteneded:true}));


app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});
app.get("/slide-show", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  res.render("slide-show");
 });
app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  res.render("index");
 });
 app.get("/math", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  res.render("math");
 });
 app.get("/profile", (req, res) => {
  let user = req.session.user;

  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  res.render("profile", {user});
 });

app.get("/profile", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
});

app.get("/math", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "math.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "faq.html"));
});

app.get("/terms", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "terms.html"));
});
app.post("/update-profile", (req, res)=>{
  console.log(req.body);

  req.session.user = req.body;

  res.redirect("/profile");
})