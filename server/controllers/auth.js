import { db } from "../app.js";
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
    // Check existing user 
    const query = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(query, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists");

        // Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const insertQuery = "INSERT INTO users(username, email, password) VALUES (?)";
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ];

        db.query(insertQuery, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            res.status(201).json("User registered successfully");
        });
    });
}

export const login = (req, res) => {
    // Implementation for login
}

export const logout = (req, res) => {
    // Implementation for logout
}
