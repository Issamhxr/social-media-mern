const { request } = require('express');
const User = require('../models/user.model')


exports.signup = ( req , res ) =>  {
    
    console.log( req.body)

    const data = {


        firstname : req.body.firstname,
        lastname : req.body.lastname,

        password : req.body.password,
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


