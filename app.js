const express = require('express');
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

function addDate(){
    const date = new Date();

    const formattedDate = date.toLocaleString('en-GB', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    });

    return formattedDate;
}

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: addDate(),
      id: 1
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: addDate(),
      id: 0
    }
];  

const newPage = require("./routes/new")(messages);
const openMessage = require("./routes/message")(messages);

app.get('/', (req,res) => {
    res.render('index', {messages: messages});
})

app.use('/new', newPage);
app.use('/messages', openMessage);

app.listen(8888, () => console.log("Worked"))