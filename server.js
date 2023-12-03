import express from 'express'
import dotenv from 'dotenv'

import connectDB from './db/connectDB.js'

dotenv.config()

const app = express()
const PORT = 8000

app.listen(PORT, (req, res)=>{
    connectDB()
    console.log("express: listening on ", PORT)
})

app.get("/", (rq, rs)=>{
    rs.send({
        name: "abhisek",
    })
})

