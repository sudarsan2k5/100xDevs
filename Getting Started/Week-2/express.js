const express = require('express');

function calculateSum(n){
    let sum = 0;
    for(let i = 1; i < n; i++){
        sum = sum + i;
    }
    return sum
}

const app = express();

app.get('/', (req, res) => {
    // throw new Error("HI");
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
})

app.listen(3000);