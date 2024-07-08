import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './Database/config.js';
import router from './Routers/userRouter.js';
dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    credentials: true,
}));

app.use(express.json());

connectDB();

app.use("/api",router)

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(process.env.PORT||3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});