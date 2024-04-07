import { request }  from "express";
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

/* REGISTER USER */

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      bio,
      password,
      picturePath,
      friends,
      birthdate,
      
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      bio,
      password: passwordHash,
      picturePath,
      friends,
      birthdate,
     
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

    
   /* LOGGING IN */

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist ..." });

    const isMatch = await bcrypt.compare(password , user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials ... " });

    const token = jwt.sign({ id: user._id }, process.env.CLE);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





      
  
