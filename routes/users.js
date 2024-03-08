import express from 'express'
import {profile} from '../controllers/users_controller.js'

const router=express.Router();


router.get('/profile',profile)



export default router;