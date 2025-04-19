const express = require('express')
const app = express()
const port = 3000
const uuid = require('uuid');
console.log(`Here is a test v1 uuid: ${uuid.v1()}`);
console.log(`Here is a test v4 uuid: ${uuid.v4()}`);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) =>{
    username = req.body[0];
    password = req.body[1];

    if (username == 'test' && password == '1234'){
        res.json({
            "name": "HealthyGamerGG",
            "id": 0
        })
    }else{
        throw new Error("Bad Login");
    }
})

app.get('/id', (req, res) =>{
    currCode = req.body[0];
    if(currCode != -1){
        
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})