import { Router } from 'express';
import { getData } from '../controller/data';

const router = Router();

// GET
router.get('/', getData)

export default router;
