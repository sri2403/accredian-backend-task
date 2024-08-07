import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import { User } from '../Models/schema.js';
dotenv.config();

export const referral = async (req, res) => {
    try {
        const { username, email, contact, refName, refEmail, refContact, relation } = req.body;

        if (!username || !email || !contact || !refName || !refEmail || !refContact || !relation) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newUser = new User({
            username,
            email,
            contact,
            refName,
            refEmail,
            refContact,
            relation
        });
        await newUser.save();

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: refEmail,
            subject: 'Referral Program',
            text: 'You have been referred to our program!',
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Details submitted and referral email sent successfully' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Submission failed' });
    }
};
