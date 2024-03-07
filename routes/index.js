import express from "express";
import { print } from "../controllers/home_controller.js";

const router=express.Router();




// Define your routes here
router.get('/', print);




export default router;