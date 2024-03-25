const mongoose =require ('mongoose');


const userSchema = new mongoose.Schema(
    {
        firstname : String,
        lastname : String,

        role : {
          type : String ,
          enum : ['admin ', 'user'],
          default : 'user'

        },

        password : String,
        email : String,
        bio : String,
        picture : String,
        birthdate : Date ,


    }

)
module.exports = mongoose.model('users' , userSchema )