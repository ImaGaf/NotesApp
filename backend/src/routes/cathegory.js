import { Router } from 'express';
const router = Router();

import { createCathegoryHandler, getByUserHandler, deleteCathegoryHandler  } from '../controllers/cathegory.controller';

router.post('/create', createCathegoryHandler);
router.delete('/delete/:id', deleteCathegoryHandler);
router.get('/getByUser/:userId',getByUserHandler)

export default router;
