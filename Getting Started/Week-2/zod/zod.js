const express = require("express");
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number())
app.use(express.json());

app.post('/', (req, res) => {
    const data = req.body.data;
    const response = schema.safeParse(data)
    res.send({
        response
    })
});

app.listen(3000)