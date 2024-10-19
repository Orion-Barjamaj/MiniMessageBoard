const express = require("express");
const router = express.Router();
const path = require("node:path");

module.exports = function(messages) {
    router.get('/:id', (req, res) => {
        const messageId = parseInt(req.params.id, 10);
    
        const message = messages.find(msg => msg.id === messageId);
        console.log(message);
    
        if(message){
            res.render('message', {message: message})
        }else {
            res.status(404).send('not found');
        }
    });
    
    return router;
};