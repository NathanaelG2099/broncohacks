import express from 'express'
import cors from 'cors'
import fs from 'fs'
import { v1, v4 } from 'uuid'
const app = express()
const port = 3000
console.log(`Here is a test v1 uuid: ${v1()}`);
console.log(`Here is a test v4 uuid: ${v4()}`);

const generate_code = (length = 6) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const read_data = (path) => {
    const raw = fs.readFileSync(path);
    return JSON.parse(raw);
}

const write_data = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

const validate_code = (path, code) => {
    const raw = fs.readFileSync(path);
    const json = JSON.parse(raw);

    for (let entry of json)
    {
        if (entry.code === code)
        {
            return false;
        }
    }
    return true;
}

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
    var clients_json = read_data("./database/clients.json");

    write_data("./database/clients.json", clients_json);

    return res.json({
        clients: clients_json
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})