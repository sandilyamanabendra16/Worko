const User = require('../models/userModel.js');

const listUsers = async (req, res) => {
    try{
        const users = await User.find({ isDeleted: false });
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err);
    }
};

const getUser = async (req, res) => {
    const id= req.params.id
    try{
        const user1 = await User.findById(id);
        if (!user1) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user1);
    }
    catch(err){
        res.status(500).json(err);
    }
};

const createUser = async (req, res) => {
    const newUser= new User(req.body);
    const {email, name, age, city, zipCode}=req.body;
    
    try{
        if(!email ||!name || !age || !city || !zipCode){
            return res.status(400).json("Please provide all the required fields");
        }
        const isUserExist= await User.findOne({email});
        if(isUserExist){
            return res.status(400).json("User Already exists");
        }
        await newUser.save();
        res.status(200).json("User Created Successfully");
    }catch(err){
        res.status(500).json(err);
    }
    
};

const updateUser = async (req, res) => {
    const id=req.params.id;
    const {email, name, age, city, zipCode}=req.body;
    try{
        if(!email && !name && !age && !city && !zipCode){
            return res.status(400).json("Please provide at least one field");
        }
        const user= await User.findByIdAndUpdate(id,req.body,{ new: true });
        res.status(200).json('User Updated Successfully');
    }catch(err){
        res.status(500).json(err);
    } 
};


const deleteUser = async (req, res) => {
    const id=req.params.id;
    try{
        await User.findByIdAndUpdate(id, { isDeleted: true });
        res.status(200).json('User Deleted Successfully');
    }
    catch(err){
        res.status(500).json(err);
    }
};

module.exports={listUsers, getUser, createUser, updateUser, deleteUser };