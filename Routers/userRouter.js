import  express  from "express";
import { referral } from "../Controllers/userController.js";

const router=express.Router();

router.post('/referral',referral);

export default router;