const { request } = require('express');
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.signup = ( req , res ) =>  {
    
    console.log( req.body)

    const data = {


        firstname : req.body.firstname,
        lastname : req.body.lastname,

        password : bcrypt.hashSync( req.body.password,10) ,
        email : req.body.email,
        bio : req.body.bio,
        picture : req.body.picture,
        birthdate : req.body.birthdate,

    }
    const _user = new User(data);

    _user.save().then(
        (createdUser) => { res.status(200).json({ message : "user added successfully ..."})      }
        
        ).catch(
            (err) =>{  res.status(400).json({message :"problem creating the user 123"    }) }
        )
        





    }


    exports.signin = async (req, res) => {
        try {
          const { email, password } = req.body;
          const user = await User.findOne({ email: email });
          if (!user) return res.status(400).json({ msg: "User does not exist... " });
      
          const isMatch = await bcrypt.compare(password , user.password);
          if (!isMatch) return res.status(400).json({ msg: "wrong password... " });
      
          const token = jwt.sign({ id: user._id }, process.env.CLE);
          delete user.password;
          res.status(200).json({  message : "seccess ..", token , user });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      };
      
  
