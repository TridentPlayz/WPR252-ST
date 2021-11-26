let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/views"));

let storeData = [];
app.get("/viewWebPage", (req, res) => {
  res.render("company.ejs");
});
app.post("/add", (req, res) => {
  let Title = req.body.Title;
  let Firstname = req.body.Firstname;
  let Lastname = req.body.Lastname;
  let Position = req.body.Position;
  let Company = req.body.Company;

    storeData.push({ Title: Title, Firstname: Firstname, Lastname: Lastname,Position: Position,Company: Company, });
    res.redirect("http://localhost:8000/view");
  }
);

app.get("/view", (req, res) => {
  res.render("displayArray.ejs", { displayArray: storeData });
});

app.listen(8000, `localhost`, () => {
  console.log(`http://localhost:8000/viewWebPage`);
});
