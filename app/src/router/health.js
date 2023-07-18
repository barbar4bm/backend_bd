import { Router } from 'express';
import { liveness } from '../controller/health';

const router = Router();

// GET
router.get('/health', liveness)

export default router;
