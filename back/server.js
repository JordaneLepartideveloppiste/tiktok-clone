import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Data from './data.js';
import Videos from './dbModels.js';
require("dotenv").config;

// app config
const app = express();
const port = process.env.PORT || 9000;
const connection_url = process.env.MONGODB;

// middlewares
app.use(express.json());
app.use(Cors());


// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// api endpoints
app.get('/', (req, res) => res.status(200).send('wesh wesh wesh'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
          res.status(500).send("La salope de data baise" + err);
        } else {
          res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send('La pute de data baise' + err)
        } else {
            res.status(201).send(data)
        }
    })
})

//listenings
app.listen(port, ()=> console.log(`listening on localhost: ${port}`));

