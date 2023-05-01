const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,getFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post('/api/userValue', (req, res) => {
    const data = req.body;
    console.log(data); // view data in server console
    res.send(data); // send data back to client
  });
  


app.listen(5000, () => console.log("Server running on 4000"));