const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,getFortune, updateCompliment,deleteCompliment, updateFortune, deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.put("/api/updateCompliment", updateCompliment);
app.delete("/api/deleteCompliment", deleteCompliment);
app.put("/api/updateFortune", updateFortune);
app.delete("/api/deleteFortune", deleteFortune);

app.post('/api/userValue', (req, res) => {
    const data = req.body;
    console.log(data); 
    res.send(data); 
  });
  


app.listen(3100, () => console.log("Server running on 3100"));