const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items= ["20 minutes Code", "1 hour walk", "Movie time"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US",options);


  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });
});

app.post("/",function(req, res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000.");
});
