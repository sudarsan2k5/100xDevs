                                        // Dumb Way to do this

const express = require('express');
const app = express();

app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const pass = req.headers.pass;
    const kidneyId = req.query.kidneyId;

    // Check For Valid user and pass or not :) 
    if(username != 'sudarsan2k5' || pass != 'pass'){
        res.status(400).json({
            "msg": "Something Up with your inputs"
        });
        return;
    }

    // Check Kidney 1 and 2 or not
    if(kidneyId != 1 && kidneyId != 2){
        res.json({
            "msg": "Someting Up with your inputs"
        });
        return;
    }

    res.json({
        msg: "Your Kidney is Fone :)"
    })
    // if(username === 'sudarsan2k5' && pass === 'pass'){
    //     if(kidneyId == 1 || kidneyId == 2){
    //         res.json({
    //             msg: "Your Kidney is Fine :)"
    //         });
    //     }
    // }
    // res.status(400).json({
    //     msg: "Something up with your inputs"
    // });
});

app.listen(8000);