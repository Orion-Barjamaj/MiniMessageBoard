const express = require('express');
const router = express.Router();

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
    
    router.post('/', (req, res) => {
        messages.unshift({ text: req.body.text, user: req.body.user, added: addDate(), id: messages.length});
        res.redirect('/');
        console.log('This is the messages array: ', messages);
    })

    return router;
};