import express, { json } from 'express'
import cors from 'cors'
import { v1, v4 } from 'uuid'
import foo from "./content-locks.json" with {"type": 'json'}
const app = express()
const port = 3000
console.log(`Here is a test v1 uuid: ${v1()}`);
console.log(`Here is a test v4 uuid: ${v4()}`);

// Change for production
app.use(cors({
    origin: "http://localhost:5173", 
}))
app.use(express.json());

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

app.get('/getclients', (req, res) =>{
    var clients_json = [];
        
    for (let i = 0; i < 50; i++)
    {
        clients_json.push({client_id: i, name: `Client number ${i + 1}`} );
    }

    return res.json({
        clients: clients_json
    });
})

app.get('/restrictions', (req, res) => {
    const user = req.body;

    //Should access database to retrieve restrictions
    if(user.userId == 1){
        res.send(foo);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})