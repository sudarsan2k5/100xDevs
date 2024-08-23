const { json } = require('body-parser');
const express = require('express');
const app = express();


var users = [{
    name: "Sudarsan",
    kidneys:[{
        healthy: true,
    }, {
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const myKidney = users[0].kidneys;
    // console.log(myKidney);
    const numberOfKidney = myKidney.length;
    console.log(numberOfKidney);
    let numberOfHealthyKidney = 0;


    for(let i = 0; i < numberOfKidney; i++){
        if(myKidney[i].healthy){
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
            // console.log(numberOfHealthyKidney);
        }
    }
    const numberOfUnhealthyKidney = numberOfKidney - numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
})

app.use(json())
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Added Successfully :)"
    })
});
app.listen(3000);