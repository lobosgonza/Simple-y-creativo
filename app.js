//jshint esversion:6

const express = require("express");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home",{page_name: "home"})
});

app.get("/quienes-somos", function(req, res){
  res.render("quienes-somos",{page_name: "quienes-somos"})
});

app.get("/servicios", function(req, res){
  res.render("servicios",{page_name: "servicios"})
});

app.get("/contactanos", function(req, res){
  res.render("contactanos",{page_name: "contactanos"})
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
