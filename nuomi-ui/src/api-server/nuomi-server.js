const path = require("path")
const express = require("express")
const app = express()
app.use(express.static(path.resolve(__dirname,"../../")))
const index =require("./data/index")


app.use("/",(req,res)=>{
  res.sendFile(path.resolve(__dirname,"../../","index.html"))
})


app.listen(4000,()=>{
  console.log("success")
})



// const path = require("path")
// const express = require("express")
// const app = express()
// app.use(express.static(path.resolve(__dirname,"../")))
// const cartsdata = require("./cartsInfo-data")
//
// app.use("/api/carts",(req,res)=>{
//   res.json(cartsdata)
// })
//
//
// app.use("/",(req,res)=>{
//   res.sendFile(path.resolve(__dirname,"../","index.html"))
// })
//
//
//
//
// app.listen(4000,()=>{
//   console.log("server is ready on port 4000")
// })

