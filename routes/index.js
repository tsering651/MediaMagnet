import express from "express";
import { print } from "../controllers/home_controller.js";
import userRoutes from './users.js'

const router=express.Router();




// Define your routes here
router.get('/', print);
router.use('/users',userRoutes)




export default router;