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
      	frends : [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: [],
          },
        ],

        picturePath: {
          type: String,
          default: "",
        },
        
        password : String,
        email: {
          type: String,
          required: true,
          unique: true,
        },
        bio: {
          type: String,
          default: "",
        },
       
        birthdate : Date ,


    },
    { timestamps: true }

);

const User = mongoose.model("User", UserSchema);
export default User;

