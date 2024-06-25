
const express = require('express');
const { listUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router= express.Router();

router.get("/user", auth, listUsers );
router.get("/user/:id" , auth, getUser);
router.post("/user", auth, createUser);
router.put("/user/:id", auth, updateUser);
router.patch("/user/:id", auth, updateUser);
router.delete("/user/:id", auth, deleteUser);

module.exports= router;