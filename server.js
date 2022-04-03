const express = require("express")
const dbConnect = require("./dbConnect") 

const app = express()

dbConnect()
app.use(express.json())

const port = process.env.PORT || 5000

app.get("/", (req, res) => res.send("Hello World! from home api"));
app.listen(port, () => console.log(`Node Js Server Running at port ${port}`))