import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import { register } from "./controllers/auth.controller.js";
import { createPost } from "./controllers/post.controller.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/user.model.js";
import Post from "./models/post.model.js";
//import { users, posts } from "./data/index.js";


dotenv.config();

const app = express()



app.use( express.json() )
app.use(cors())


app.get( '/' , ( req ,res ) => {
  res.send( 'hello ')
})

/* ROUTES WITH FILES */
app.post("/auth/register", register);




/* ROUTES */

import userRoutes from "./routes/user.router.js"
import authRoutes from "./routes/auth.router.js"
import postRoutes from "./routes/post.router.js";
app.use("/posts", postRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);






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




 
app.listen(process.env.PORT ,  ()=> {
  console.log (` app listening on port ${process.env.PORT}`);


})


