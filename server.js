const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const inventoryRoute = require("./routes/inventoryRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "supersecretkey",
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

app.set("view engine", "ejs");
app.set("views",__dirname + "./views");

app.use(express.static("public"));

app.use("/inv", inventoryRoute);

app.get("/", (req, res) => {
  res.render("index", { title: "Home", message: req.flash("notice") });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
