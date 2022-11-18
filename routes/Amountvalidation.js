import express from 'express'
import { validateAmount } from '../controllers/Validateamount.js';

const router=express.Router();
router.post('/amount',validateAmount)


export default router;