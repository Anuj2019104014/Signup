const express = require('express')
const app = express()
const authrouter=express.Router();

// const moongoose=require('moongoose');

app.use(express.json())
app.use('/signup',authrouter)

authrouter.route('/')
.get(getSignup)
.post(postSignup)
function getSignup(req, res) {
  res.sendFile('D:/signup/index.html')
}

function postSignup(req, res) {
    let obj=req.body;
    res.json({
        message:'user signup',
        data:obj
    })
    console.log(obj)
   // res.sendFile('D:/signup/index.html')
  }

//   const db_link=
//   moongoose.connect(db_link).then(function(db){
//     console.log('db connected')
//   }).catch(function(err)
//   {
//     console.log(err)
//   })

// app.listen(3000)
console.log('3000')