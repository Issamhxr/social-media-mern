const express = require('express')

require ('dotenv').config()
const cors = require('cors')

const app = express()
const mongoose = require('mongoose')


app.use( express.json() )
app.use(cors())


app.get( '/' , ( req ,res ) => {
  res.send( 'hello ')
})


const userRoutes = require('./routes/user.router') 

app.use('/users', userRoutes )



mongoose.connect(process.env.CUNNECTION_STRING ,
{
  useNewUrlParser : true,
  useUnifiedTopology : true

}

)

const db = mongoose.connection;

db.on("error" , console.error.bind(console , "connection error 123 : "));
db.once("open" , function(){
  
  console.log("database connected successfully ..");
}  )





 
app.listen( process.env.PORT ,  ()=> {
  console.log (` app listening on port ${process.env.PORT}`);


})
