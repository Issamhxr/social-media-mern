import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        firstname : String,
        lastname : String,

        role : {
          type : String ,
          enum : ['admin ', 'user'],
          default : 'user'

        },
        friends: {
          type: Array,
          default: [],
        },

        picturePath: {
          type: String,
          default: "",
        },
        
        password : String,
        email : String,
        bio : String,
       
        birthdate : Date ,


    },
    { timestamps: true }

);

const User = mongoose.model("User", UserSchema);
export default User;

