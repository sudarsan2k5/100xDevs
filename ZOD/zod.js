const express = require('express');
const app = express();
const zod = require('zod')

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    // do something with kidney
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send('Your Kidney is: '+ kidneysLength);
});

app.listen(8000)