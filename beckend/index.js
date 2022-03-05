const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const cardRouters = require("./routers/card")

const PORT = process.env.PORT || 3000;
const settingConnect = `mongodb://localhost:27017/card`;

const app = express()

app.use(express.json());
app.use(cors());
app.use('', cardRouters);


async function start() {
    try {
        
        await mongoose.connect(settingConnect, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })

        app.listen(PORT, () => {
            console.log('Server has been started port: ' + PORT)
        })
    } catch(e) {
        console.log(e)
    }
}

start()