// //EXPORTING DEPENDENCIES
const express = require('express')
const cors = require('cors');

const mongoose = require('mongoose')
const zod = require('zod')
// const userRouter = require("./router/user")
const adminRouter = require("./router/admin")
const courseRouter = require("./router/course.js")
require("dotenv").config()
const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.static('public'));
app.use(cors());

app.use(express.json())

// app.use('/api/v1/user', userRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/course', courseRouter)

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(PORT)
    console.log("listening to the 3000 port")
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html'); // 
      });
}
main()