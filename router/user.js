const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../db.js");
const zod = require("zod");

const userRouter = Router();

// Signup Schema
const signupSchema = zod.object({
    fullname: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6), // Minimum password length
});

// Login Schema
const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
});

// User Signup Route
userRouter.post('/signup', async (req, res) => {
    try {
        const parseData = signupSchema.safeParse(req.body);
        if (!parseData.success) {
            return res.status(400).json({ errors: parseData.error.errors });
        }

        const { fullname, email, password } = parseData.data;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await userModel.create({ fullname, email, password: hashedPassword });
        res.status(201).json({ message: "User created successfully", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating user" });
    }
});

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body; // Using email directly

    try {
        const user = await userModel.findOne({ where: { email } }); // Look up by email

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});



module.exports = userRouter;
