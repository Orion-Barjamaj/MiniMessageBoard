const express = require('express');
const app = express();
const path = require("node:path");
const port = process.env.PORT || 3000;
const queries = require("./db/queries.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const newPage = require("./routes/new")(queries.getAllMessages);
const openMessage = require("./routes/message")(queries.getAllMessages);

app.get('/', async (req,res) => {
  const messages = await queries.getAllMessages();
  console.log(messages);
  res.render('index', {messages: messages});
})

app.use('/new', newPage);
app.use('/messages', openMessage);

app.listen(port, () => console.log("Connected at", port))