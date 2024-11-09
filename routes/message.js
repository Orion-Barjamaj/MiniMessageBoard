const express = require("express");
const router = express.Router();
const query = require("../db/queries.js");

module.exports = function(messages) {
    router.get('/:id', async (req, res) => {
        const messageId = parseInt(req.params.id, 10);
    
        const message = await query.getMessageById(messageId);
    
        if(message){
            console.log('Selected Message: ', message);
            res.render('message', {message: message, pageid: messageId})
        }else {
            res.status(404).send('not found');
        }
    });
    
    return router;
};