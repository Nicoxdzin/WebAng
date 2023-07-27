require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const veiculosRouter = require('./routes/veiculos')
const servicosRouter = require('./routes/servicos')

const app = express();
app.use(cors());
app.use(express.json());

const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log ('Connected to Database'))


app.use('/veiculos', veiculosRouter)
app.use('/servicos', servicosRouter)


app.get('/', (req, res) => {
    res.send("Olá")
})



const port = 3000;
app.listen(port, () => {
    mongoose.connect(process.env.DATABASE_URL , { useNewUrlParser: true })
    console.log("waiting for changes")
})