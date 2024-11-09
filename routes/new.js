const express = require('express');
const router = express.Router();
const queries = require("../db/queries");

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

module.exports = function(messages){
    router.get('/', (req, res) => {
        res.render('new');
    })
    
    router.post('/', async (req, res) => {
        await queries.insertMessage(req.body.user, req.body.text, addDate());
        res.redirect('/');
    })

    return router;
};